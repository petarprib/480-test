import Providers from './providers';
import AppRouter from './routes/index.routes';

export default function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
