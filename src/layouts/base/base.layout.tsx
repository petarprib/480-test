import { type ReactNode, useEffect, useRef, useState } from 'react';

import Header from './components/header.component';
import Sidebar from './components/sidebar.component';

import './styles/base-layout.scss';

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isSidebarOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        ref={sidebarRef}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main>{children}</main>
    </>
  );
}
