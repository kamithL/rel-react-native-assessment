import Constants from 'expo-constants';
import * as Location from 'expo-location';

const KEY =
  (Constants.expoConfig?.extra?.GOOGLE_MAPS_API_KEY) ||
  ((Constants.manifest as any)?.extra?.GOOGLE_MAPS_API_KEY) ||
  '';

function assertOk(j: any) {
  if (!j || (j.status && j.status !== 'OK' && j.status !== 'ZERO_RESULTS')) {
    const msg = `Places API ${j?.status ?? 'ERROR'}: ${j?.error_message ?? 'Unknown error'}`;
    throw new Error(msg);
  }
}

async function getCoordsParam() {
  try {
    const perm = await Location.getForegroundPermissionsAsync();
    if (perm.status !== 'granted') return '';
    const pos = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Lowest });
    const { latitude, longitude } = pos.coords;
    return `&location=${latitude},${longitude}&radius=30000`;
  } catch { return ''; }
}

export async function fetchAutocomplete(input: string) {
  const near = await getCoordsParam(); 
  const url =
    `https://maps.googleapis.com/maps/api/place/autocomplete/json` +
    `?input=${encodeURIComponent(input)}` +
    `&language=en` +  
    `&key=${KEY}` +
    near;

  const r = await fetch(url);
  const j = await r.json();
  assertOk(j);
  const preds = j.predictions ?? [];
  return preds.map((p: any) => ({ id: p.place_id, description: p.description }));
}

export async function fetchPlaceDetail(placeId: string) {
  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=name,geometry,formatted_address` +
    `&language=en` +
    `&key=${KEY}`;

  const r = await fetch(url);
  const j = await r.json();
  assertOk(j);

  const d = j.result || {};
  const loc = d.geometry?.location || { lat: 0, lng: 0 };
  return {
    id: placeId,
    name: d.name || 'Unknown',
    lat: Number(loc.lat || 0),
    lng: Number(loc.lng || 0),
    address: d.formatted_address || '',
  };
}
