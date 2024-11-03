import type { ReactNode } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { setDefaultOptions } from 'date-fns';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './features/store';

export default function Providers({ children }: { children: ReactNode }) {
  setDefaultOptions({ weekStartsOn: 1 });

  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>{children}</Provider>
      </LocalizationProvider>
    </BrowserRouter>
  );
}
