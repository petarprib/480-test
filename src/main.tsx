import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import './styles/index.css';
import App from './app.tsx';
import Providers from './providers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
