import { configureStore } from '@reduxjs/toolkit';

import forecastApi from './forecast/forecast.api';
import uiReducer from './ui/ui.slice';

export const store = configureStore({
  reducer: {
    [forecastApi.reducerPath]: forecastApi.reducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(forecastApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
