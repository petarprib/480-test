import {
  createApi,
  fetchBaseQuery,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import type { Coordinates, Forecast, ForecastRes } from './forecast.types';

const forecastApi = createApi({
  reducerPath: 'forecastApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (build) => ({
    getForecast: build.query<Forecast[], { city: string; lang: string }>({
      async queryFn({ city, lang }, _queryApi, _extraOptions, fetchWithBQ) {
        const coordinatesRes = await fetchWithBQ(
          `geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
        );

        if (coordinatesRes.error) {
          return { error: coordinatesRes.error as FetchBaseQueryError };
        }

        const coordinates = coordinatesRes.data as Coordinates[];

        const { lat, lon } = coordinates[0];

        const forecastRes = await fetchWithBQ(
          `data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
        );

        const { list } = forecastRes.data as ForecastRes;

        return forecastRes.data
          ? { data: list }
          : { error: forecastRes.error as FetchBaseQueryError };
      },
    }),
  }),
});

export const { useGetForecastQuery } = forecastApi;
export default forecastApi;
