import type { ReactNode } from 'react';

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div>
      <ul>
        {['London', 'Toronto', 'Singapore'].map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}
