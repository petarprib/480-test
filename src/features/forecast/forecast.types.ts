export type Forecast = {
  dt: number;
  weather: { icon: string; description: string }[];
  main: { temp: number; temp_min: number; temp_max: number };
};

export type Coordinates = {
  lat: number;
  lon: number;
};

export type ForecastRes = {
  list: Forecast[];
};
