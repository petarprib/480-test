import WeatherCard from './weather-card.component';
import type { Forecast } from '../../../../features/forecast/forecast.types';

type CityWeatherListProps = {
  forecast: Forecast[];
};

export default function CityWeatherList({ forecast }: CityWeatherListProps) {
  return (
    <div>
      {forecast.map((weather: Forecast) => (
        <WeatherCard key={weather.dt} weather={weather} />
      ))}
    </div>
  );
}
