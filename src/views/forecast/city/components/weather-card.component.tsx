import type { Forecast } from '../../../../features/forecast/forecast.types';
import { formatDate, formatTime } from '../../../../utils/date-time.util';

type WeatherCardProps = {
  weather: Forecast;
};

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <article className='weather-card'>
      <div className='weather-card__date-time-wrapper'>
        <div className='weather-card__date-time-wrapper__date-time'>
          <p className='weather-card__date-time-wrapper__date-time__date'>
            {formatTime(weather.dt)}
          </p>
          <p>{formatDate(weather.dt)}</p>
        </div>
      </div>
      <div className='weather-card__icon-description-wrapper'>
        <img
          src={`../../../../../src/assets/weather-icons/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
        <p className='weather-card__icon-description-wrapper__description'>
          {weather.weather[0].description}
        </p>
      </div>
      <div className='weather-card__temps-wrapper'>
        <p className=' weather-card__temps-wrapper__current-temp'>
          {Math.round(weather.main.temp)}°
        </p>
        <p>Min {Math.round(weather.main.temp_min)}°</p>
        <p>Max {Math.round(weather.main.temp_max)}°</p>
      </div>
    </article>
  );
}
