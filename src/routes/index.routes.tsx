import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import routes from './routes.constants';
import BaseLayout from '../layouts/base/base.layout';
import City from '../views/forecast/city/city.view';
import Forecast from '../views/forecast/forecast.view';
import Form from '../views/form/form.view';

export default function AppRouter() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route index element={<Navigate to={routes.forecast} />} />
        <Route path={routes.forecast} element={<Outlet />}>
          <Route index element={<Forecast />} />
          <Route path=':city' element={<City />} />
        </Route>
        <Route path={routes.form} element={<Form />} />
        <Route path='*' element={<Navigate to={routes.forecast} />} />
      </Route>
    </Routes>
  );
}
