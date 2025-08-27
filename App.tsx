// MUST be first
import 'react-native-gesture-handler';

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/app/store';
import { Provider as AntProvider } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';

import { useFonts } from 'expo-font';
const antDesignTtf = require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf');

import MapScreen from './src/features/map/MapScreen';

export default function App() {
  const [fontsLoaded] = useFonts({ AntDesign: antDesignTtf });
  if (!fontsLoaded) return null;  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <AntProvider locale={enUS}>
          <MapScreen />
        </AntProvider>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
