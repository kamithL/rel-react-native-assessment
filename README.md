# rel-react-native-assessment

Single-page React Native (Expo) app that lets users search places with **Google Places Autocomplete**, select a result, and see it on a **map**. State is managed with **Redux Toolkit** (+ **Redux-Observable Epics**). UI is built with **Ant Design Mobile RN**. User **search history** (of selected items) is tracked (and can be persisted).

---

## ✨ Features
- Google **Places Autocomplete** (English results)
- **Map markers** for selected places (de-duplicated)
- **Redux Toolkit** store
  - `results`: selected places (markers)
  - `history`: **selected** search terms (not every keystroke)
- **Redux-Observable (Epics)**: debounced autocomplete + place details fetch
- **Ant Design RN** UI (InputItem, List, NoticeBar)
- **Current location** as default center (with permission)
- Clean, scalable **folder structure** & naming

---

## 🧱 Tech Stack
Expo (managed) • React Native Maps • Google Places API • Redux Toolkit • Redux-Observable • RxJS • @ant-design/react-native • expo-location • @expo/vector-icons • (optional) AsyncStorage

---

## 📁 Project Structure
```
src/
  app/
    store.ts
    rootEpic.ts
  features/
    map/
      MapScreen.tsx
    places/
      types.ts
      placesSlice.ts
      api.ts
      components/
        SearchBar.tsx
        HistoryBar.tsx        # optional
        ResultsList.tsx       # optional
  types/
    antd-locale.d.ts          # TS shim for AntD en_US locale
App.tsx
```

---

## ✅ How it meets the assignment
- **Single-page** app with map + search overlay
- **Autocomplete** text box using **Google Places Autocomplete API**
- **Redux** stores selected place results and tracks **user search history** (on selection)
- **Ant Design** components for UI
- **Best practices**: modular folders, clear naming, epics for scalable async

---

## 🛠️ Setup

### Prerequisites
- Node **20.x LTS** (recommended)
- Yarn (or npm)
- **Expo Go** on your phone (iOS/Android) or emulators
- Google Cloud project with **Billing ON**

### 1) Install
```bash
yarn install
```

### 2) Environment variables
Create a `.env` from the example:
```
GOOGLE_MAPS_API_KEY=YOUR_REAL_API_KEY
```


## ▶️ Run (Expo)
```bash
npx expo start -c
```
- Press **i** for iOS Simulator (macOS + Xcode)
- Press **a** for Android Emulator (Android Studio)
- Or scan the QR with **Expo Go** on your phone (below)

If your phone/computer are on different networks or you hit connection issues:
```bash
npx expo start --tunnel
```

### 📱 Open on your phone (QR code)
1. Install **Expo Go** (App Store / Google Play)  
2. Run `npx expo start -c`  
3. Scan the QR shown in the terminal/DevTools  
   - **iOS:** Camera → open in Expo Go, or Expo Go → *Scan QR*  
   - **Android:** Expo Go → *Scan QR code*  
4. The app bundles and launches on your device (live reload enabled)

**First-run**: Say **Y** to `@types/react-native` if prompted, allow local network, and grant **Location** permission.




