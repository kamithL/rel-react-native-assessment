import React from 'react';
import { View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import SearchBar from '../places/components/SearchBar';
import HistoryBar from '../places/components/HistoryBar';

export default function MapScreen() {
  const results = useSelector((s: RootState) => s.places.results);
  const center = results[results.length - 1] ?? { lat: 6.9271, lng: 79.8612 };

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: center.lat,
          longitude: center.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        region={{
          latitude: center.lat,
          longitude: center.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation
      >
        {results.map((p) => (
          <Marker key={p.id} coordinate={{ latitude: p.lat, longitude: p.lng }} title={p.name} />
        ))}
      </MapView>

      <SafeAreaView pointerEvents="box-none" style={styles.overlay}>
        <View style={styles.searchWrap} pointerEvents="box-none">
          <SearchBar />
          <HistoryBar/>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0 },
  searchWrap: { paddingHorizontal: 12, paddingTop: Platform.OS === 'android' ? 24 : 8, zIndex: 10 },
});
