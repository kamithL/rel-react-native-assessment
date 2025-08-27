import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import placesReducer from '../features/places/placesSlice';
import { rootEpic } from './rootEpic';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: { places: placesReducer },
  middleware: (gDM) => gDM({ serializableCheck: false }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
