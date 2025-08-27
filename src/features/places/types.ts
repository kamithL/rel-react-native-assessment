export type PlaceSuggestion = {
  id: string;
  description: string;
};

export type PlaceDetail = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address?: string;
};

export type PlacesState = {
  suggestions: PlaceSuggestion[];
  results: PlaceDetail[];
  history: string[];
  loading: boolean;
  error?: string | null;
};
