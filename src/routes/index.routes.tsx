import {
  Navigate,
  Outlet,
  Routes as ReactRouterRoutes,
  Route,
} from 'react-router-dom';

import BaseLayout from '../layouts/base/base.layout';
import Form from '../views/form/form.view';
import CityWeather from '../views/weather/city/city-weather.view';
import Weather from '../views/weather/weather.view';

export default function AppRouter() {
  return (
    <ReactRouterRoutes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route index element={<Navigate to='weather' />} />
        <Route path='weather' element={<Outlet />}>
          <Route index element={<Weather />} />
          <Route path=':city' element={<CityWeather />} />
        </Route>
        <Route path='form' element={<Form />} />
        <Route path='*' element={<Navigate to='weather' />} />
      </Route>
    </ReactRouterRoutes>
  );
}
