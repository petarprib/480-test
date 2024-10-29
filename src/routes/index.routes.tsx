import {
  Navigate,
  Outlet,
  Routes as ReactRouterRoutes,
  Route,
} from 'react-router-dom';

import BaseLayout from '../layouts/base/base.layout';
import Form from '../pages/form/form.page';
import Weather from '../pages/weather/weather.page';

export default function Routes() {
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
        <Route path='weather' element={<Weather />} />
        <Route path='form' element={<Form />} />
      </Route>
    </ReactRouterRoutes>
  );
}
