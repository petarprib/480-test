import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './app.tsx';
import Providers from './providers.tsx';

import './services/locale/i18n.config.ts';
import './styles/index.scss';
import './styles/typography.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
