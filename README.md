# rel-react-native-assessment

Single-page React Native (Expo) app that lets users search places with **Google Places Autocomplete**, select a result, and see it on a **map**. State is managed with **Redux Toolkit** (+ **Redux-Observable Epics** for async flows). UI is built with **Ant Design Mobile RN**. User **search history** (of selected items) is tracked (and can be persisted).

---

## ✨ Features

- **Google Places Autocomplete** (English results)
- **Map markers** for selected places (de-duplicated)
- **Redux Toolkit** store:
  - `results`: selected places (map markers)
  - `history`: list of **selected** search terms (not every keystroke)
- **Redux-Observable (Epics)** for:
  - debounced autocomplete requests
  - fetching place details
- **Ant Design RN** UI (InputItem, List, NoticeBar)
- **Current location** used as default map center (with permission)
- Optional **history bar** chips to re-run past searches
- Clean, scalable **folder structure** & naming

---

## 🧱 Tech Stack

- **Expo** (managed workflow)
- **React Native Maps**
- **Google Places API**
- **Redux Toolkit**, **Redux-Observable**, **RxJS**
- **@ant-design/react-native** (Ant Design Mobile RN)
- **expo-location** (current position)
- **@expo/vector-icons** (icons)
- (Optional) **AsyncStorage** for history persistence

---

## 📁 Project Structure

src/
app/
store.ts
rootEpic.ts
features/
map/MapScreen.tsx
places/
types.ts
placesSlice.ts
api.ts
components/
SearchBar.tsx
HistoryBar.tsx # optional
ResultsList.tsx # optional
types/
antd-locale.d.ts # TS shim for AntD en_US locale
App.tsx


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
