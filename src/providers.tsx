import type { ReactNode } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index.routes';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <Routes />
      {children}
    </BrowserRouter>
  );
}
