import { useDispatch, useSelector } from 'react-redux';

import SidebarMenu from './sidebar-menu.component';
import type { RootState } from '../../../../features/store';
import { setIsSidebarOpen } from '../../../../features/ui/ui.slice';
import { useClickAway } from '../../../../hooks/useClickAway.hook';

export default function Sidebar() {
  const { isSidebarOpen } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();
  const sidebarRef = useClickAway<HTMLDivElement>(() =>
    dispatch(setIsSidebarOpen(false)),
  );

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${isSidebarOpen ? `sidebar--open` : `sidebar--closed`}`}
    >
      <SidebarMenu />
    </div>
  );
}
