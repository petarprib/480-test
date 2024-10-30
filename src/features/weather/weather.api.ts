import {
  createApi,
  fetchBaseQuery,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

type Coordinates = {
  lat: number;
  lon: number;
};

const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (build) => ({
    getWeather: build.query<any, string>({
      async queryFn(city, _queryApi, _extraOptions, fetchWithBQ) {
        const coordinatesRes = await fetchWithBQ(
          `geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
        );

        if (coordinatesRes.error) {
          return { error: coordinatesRes.error as FetchBaseQueryError };
        }

        const coordinates = coordinatesRes.data as Coordinates[];

        const { lat, lon } = coordinates[0];

        const weatherRes = await fetchWithBQ(
          `data/2.5/forecast?lat=${lat}&lon=${lon}&lang=en&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
        );

        return weatherRes.data
          ? { data: weatherRes.data as any }
          : { error: weatherRes.error as FetchBaseQueryError };
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
export default weatherApi;
