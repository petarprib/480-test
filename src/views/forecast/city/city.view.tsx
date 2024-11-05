import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import CityWeatherList from './components/city-weather-list.component';
import ErrorFetching from './components/error-fetching.component';
import Loading from './components/loading.component';
import { availableCities } from '../../../constants';
import { useGetForecastQuery } from '../../../features/forecast/forecast.api';

import './city-view.scss';

export default function CityView() {
  const { city } = useParams();
  const navigate = useNavigate();
  const {
    t,
    i18n: { language },
  } = useTranslation(['forecast', 'common']);

  const isInvalidCity = !availableCities.some(
    (availableCity) => availableCity === city,
  );

  useEffect(() => {
    if (isInvalidCity) navigate('/forecast');
  }, [city, navigate, isInvalidCity]);

  const {
    data: forecast,
    error: forecastError,
    isFetching: isFetchingForecast,
  } = useGetForecastQuery(
    { city: city!, lang: language },
    { skip: isInvalidCity },
  );

  if (isFetchingForecast) return <Loading />;

  if (forecastError) return <ErrorFetching />;

  if (forecast) {
    return (
      <div className='city-forecast-wrapper'>
        <h1 className='page-title city-forecast-wrapper__title'>
          {t('city_forecast', {
            ns: 'forecast',
            city: t(city!, { ns: 'common' }),
          })}
        </h1>
        <CityWeatherList forecast={forecast} />
      </div>
    );
  }
}
