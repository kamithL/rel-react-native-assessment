import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceDetail, PlaceSuggestion, PlacesState } from './types';

const initial: PlacesState = {
  suggestions: [],
  results: [],
  history: [],
  loading: false,
  error: null,
};

const places = createSlice({
  name: 'places',
  initialState: initial,
  reducers: {
    queryChanged: (s, _a: PayloadAction<string>) => {
      s.loading = true;
      s.error = null;
    },

    suggestionsLoaded: (s, a: PayloadAction<PlaceSuggestion[]>) => {
      s.loading = false;
      s.suggestions = a.payload;
    },
    suggestionsFailed: (s, a: PayloadAction<string>) => {
      s.loading = false;
      s.error = a.payload;
    },

    selectSuggestion: (s, _a: PayloadAction<PlaceSuggestion>) => {
      s.loading = true;
      s.error = null;
    },

    placeDetailLoaded: (s, a: PayloadAction<PlaceDetail>) => {
      s.loading = false;
      const id = a.payload.id;
      const i = s.results.findIndex(r => r.id === id);
      if (i !== -1) s.results.splice(i, 1);
      s.results.push(a.payload);
    },
    placeDetailFailed: (s, a: PayloadAction<string>) => {
      s.loading = false;
      s.error = a.payload;
    },

    pushHistory: (s, a: PayloadAction<string>) => {
      const term = a.payload.trim();
      if (!term) return;
      s.history = [term, ...s.history.filter(t => t.toLowerCase() !== term.toLowerCase())].slice(0, 20);
    },

    clearSuggestions: (s) => { s.suggestions = []; },
    clearResults: (s) => { s.results = []; },

    removeResult: (s, a: PayloadAction<string>) => {
      s.results = s.results.filter(r => r.id !== a.payload);
    },

     historyLoaded: (s, a: PayloadAction<string[]>) => {
      s.history = a.payload || [];
    },
    clearHistory: (s) => {
      s.history = [];
    },
  },
  
});

export const {
  queryChanged, suggestionsLoaded, suggestionsFailed,
  selectSuggestion, placeDetailLoaded, placeDetailFailed,
  pushHistory, clearSuggestions, clearResults, removeResult,historyLoaded, clearHistory
} = places.actions;



export default places.reducer;
