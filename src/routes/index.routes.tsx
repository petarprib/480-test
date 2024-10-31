import {
  Navigate,
  Outlet,
  Routes as ReactRouterRoutes,
  Route,
} from 'react-router-dom';

import BaseLayout from '../layouts/base/base.layout';
import City from '../views/forecast/city/city.view';
import Forecast from '../views/forecast/forecast.view';
import Form from '../views/form/form.view';

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
        <Route index element={<Navigate to='forecast' />} />
        <Route path='forecast' element={<Outlet />}>
          <Route index element={<Forecast />} />
          <Route path=':city' element={<City />} />
        </Route>
        <Route path='form' element={<Form />} />
        <Route path='*' element={<Navigate to='forecast' />} />
      </Route>
    </ReactRouterRoutes>
  );
}
