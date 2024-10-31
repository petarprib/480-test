import { type ReactNode } from 'react';

import Header from './components/header.component';
import Sidebar from './components/sidebar/sidebar.component';

import './styles/base-layout.scss';

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
