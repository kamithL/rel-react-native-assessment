
import { combineEpics, ofType } from 'redux-observable';
import { debounceTime, mergeMap, from, of, map, catchError } from 'rxjs';
import {
  queryChanged, suggestionsLoaded, suggestionsFailed,
  selectSuggestion, placeDetailLoaded, placeDetailFailed, pushHistory
} from '../features/places/placesSlice';
import { fetchAutocomplete, fetchPlaceDetail } from '../features/places/api';

const queryEpic = (action$: any) =>
  action$.pipe(
    ofType(queryChanged.type),
    debounceTime(250),
    mergeMap((a: any) =>
      a.payload?.trim()?.length
        ? from(fetchAutocomplete(a.payload)).pipe(
            map(suggestionsLoaded),
            catchError((e) => of(suggestionsFailed(String(e))))
          )
        : of(suggestionsLoaded([]))
    )
  );

const detailEpic = (action$: any) =>
  action$.pipe(
    ofType(selectSuggestion.type),
    mergeMap((a: any) =>
      from(fetchPlaceDetail(a.payload.id)).pipe(
  
        mergeMap((detail) => of(
          placeDetailLoaded(detail),
          pushHistory(a.payload.description) 
        )),
        catchError((e) => of(placeDetailFailed(String(e))))
      )
    )
  );

export const rootEpic = combineEpics(queryEpic, detailEpic);
