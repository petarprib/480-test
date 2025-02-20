import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import SidebarMenu from './sidebar-menu.component';
import IconButton from '../../../../components/icon-button/icon-button.component';
import type { RootState } from '../../../../features/store';
import { setIsSidebarOpen } from '../../../../features/ui/ui.slice';
import useOnClickAway from '../../../../hooks/use-on-click-away.hook';

export default function Sidebar() {
  const { isSidebarOpen } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();
  const sidebarRef = useOnClickAway<HTMLDivElement>(() =>
    dispatch(setIsSidebarOpen(false)),
  );
  const { t } = useTranslation('sidebar');

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${isSidebarOpen ? `sidebar--open` : `sidebar--closed`}`}
    >
      <div className='sidebar__top'>
        <IconButton
          icon={faXmark}
          onClick={() => dispatch(setIsSidebarOpen(false))}
          ariaLabel={t('close_sidebar')}
        />
      </div>
      <SidebarMenu />
    </div>
  );
}
