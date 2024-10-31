export type Forecast = {
  dt: number;
  weather: { icon: string; description: string }[];
  main: { temp: number; temp_min: number; temp_max: number };
};
