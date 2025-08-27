# rel-react-native-assessment

Single-page Expo app with **Google Places Autocomplete**, **Redux** state (results + search history), and **Ant Design** UI. Select a place to drop a marker on the map. History records **only selected places**.

## Preview
- Search input with autocomplete
- Suggestions list (English)
- Tap a suggestion → centers map + adds marker
- History chips to re-run a past search

## Tech
- Expo (managed)
- react-native-maps
- Google Places Autocomplete API
- @reduxjs/toolkit, redux-observable (Epics), rxjs
- @ant-design/react-native (InputItem, List)
- @expo/vector-icons (custom search icon)
- expo-location (center on current location)

## Setup

### 1) Requirements
- Node **LTS 20.x** recommended
- Yarn (or npm)
- Expo CLI via `npx`

### 2) Install
```bash
yarn install
