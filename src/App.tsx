import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setIsSidebarOpen } from './features/ui/ui.slice';
import AppRouter from './routes/index.routes';

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsSidebarOpen(false));
  }, [location.pathname, dispatch]);

  return <AppRouter />;
}
