import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import paths from './paths.routes';
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
        <Route index element={<Navigate to={paths.forecast} />} />
        <Route path={paths.forecast} element={<Outlet />}>
          <Route index element={<Forecast />} />
          <Route path=':city' element={<City />} />
        </Route>
        <Route path={paths.form} element={<Form />} />
        <Route path='*' element={<Navigate to={paths.forecast} />} />
      </Route>
    </Routes>
  );
}
