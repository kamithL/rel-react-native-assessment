// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Redirect deprecated import used by @ant-design/react-native:
// 'react-native-gesture-handler/DrawerLayout'  ->  'react-native-drawer-layout'
config.resolver = {
  ...(config.resolver || {}),
  extraNodeModules: {
    ...(config.resolver?.extraNodeModules || {}),
    'react-native-gesture-handler/DrawerLayout': path.resolve(
      __dirname,
      'drawer-layout-alias.js'
    ),
  },
};

module.exports = config;
