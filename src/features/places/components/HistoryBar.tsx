import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { queryChanged, clearHistory } from '../placesSlice';
import { AntDesign } from '@expo/vector-icons';

export default function HistoryBar() {
  const dispatch = useDispatch();
  const history = useSelector((s: RootState) => s.places.history);

  if (!history.length) return null;

  return (
    <View style={styles.wrap}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {history.map((term) => (
          <TouchableOpacity
            key={term}
            style={styles.chip}
            onPress={() => dispatch(queryChanged(term))}
          >
            <Text style={styles.chipText}>{term}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.clear} onPress={() => dispatch(clearHistory())}>
        <AntDesign name="delete" size={16} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  chip: {
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  chipText: { color: '#333' },
  clear: { paddingHorizontal: 8, paddingVertical: 4 },
});
