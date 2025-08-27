import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { InputItem, List, NoticeBar, WhiteSpace } from '@ant-design/react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { queryChanged, selectSuggestion, clearSuggestions } from '../placesSlice';
import { RootState } from '../../../app/store';

export default function SearchBar() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { suggestions, loading, error } = useSelector((s: RootState) => s.places);

  const showNoResults = !loading && !error && text.trim().length > 1 && suggestions.length === 0;

  return (
    <View style={styles.wrapper}>
      {/* our own magnifier icon */}
      <AntDesign name="search1" size={16} color="#666" style={styles.icon} pointerEvents="none" />

      <InputItem
        value={text}
        onChange={(val) => { const v = val || ''; setText(v); dispatch(queryChanged(v)); }}
        placeholder="Search places..."
        clear
        returnKeyType="search"
        styles={{ input: { paddingLeft: 28 } as any }}
      />

      {error && (
        <>
          <WhiteSpace size="sm" />
          <NoticeBar mode="closable" icon={null}>
            {error}
          </NoticeBar>
        </>
      )}

      {showNoResults && (
        <>
          <WhiteSpace size="sm" />
          <List>
            <List.Item disabled>No results</List.Item>
          </List>
        </>
      )}

      {suggestions.length > 0 && (
        <List>
          {suggestions.map((sug) => (
            <List.Item
              key={sug.id}
              onPress={() => { dispatch(selectSuggestion(sug)); dispatch(clearSuggestions()); }}
            >
              {sug.description}
            </List.Item>
          ))}
        </List>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  icon: { position: 'absolute', left: 10, top: 14, zIndex: 2, opacity: 0.75 },
});
