import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './app.tsx';

import './services/i18n/i18n.config.ts';
import './styles/index.scss';
import './styles/typography.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
