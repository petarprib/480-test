import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { availableCities } from '../../../constants';
import { useGetWeatherQuery } from '../../../features/weather/weather.api';

export default function CityWeather() {
  const { city } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const validCity = !availableCities.some(
    (availableCity) => availableCity === city,
  );

  useEffect(() => {
    if (validCity) navigate('/weather');
  }, [city, navigate, validCity]);

  const {
    data: weather,
    error: weatherError,
    isFetching: isFetchingWeather,
  } = useGetWeatherQuery(city!, { skip: validCity });

  console.log('weather: ', weather);
  console.log('weatherError: ', weatherError);
  console.log('isFetchingWeather: ', isFetchingWeather);

  return (
    <div>
      <h1>
        {city} {t('weather')}
      </h1>
    </div>
  );
}
