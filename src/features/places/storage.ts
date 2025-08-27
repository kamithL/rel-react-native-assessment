import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'places_history_v1';

export async function loadHistory(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export async function saveHistory(history: string[]) {
  try { await AsyncStorage.setItem(KEY, JSON.stringify(history)); } catch {}
}

export async function clearHistoryStorage() {
  try { await AsyncStorage.removeItem(KEY); } catch {}
}
