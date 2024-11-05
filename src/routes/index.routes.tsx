import { Suspense } from 'react';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import paths from './paths.routes';
import BaseLayout from '../layouts/base/base.layout';
import CityView from '../views/forecast/city/city.view';
import Loading from '../views/forecast/city/components/loading.component';
import ForecastView from '../views/forecast/forecast.view';
import FormView from '../views/form/form.view';

export default function AppRouter() {
  return (
    <Suspense>
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
            <Route index element={<ForecastView />} />
            <Route path=':city' element={<CityView />} />
          </Route>
          <Route path={paths.form} element={<FormView />} />
          <Route path='*' element={<Navigate to={paths.forecast} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
