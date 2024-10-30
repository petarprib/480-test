import type { Dispatch, ForwardedRef, SetStateAction } from 'react';
import { forwardRef } from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { availableCities } from '../../../constants';

import '../styles/base-layout.scss';
import '../../../styles/variables.scss';

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(function Sidebar(
  { isSidebarOpen, setIsSidebarOpen }: SidebarProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { t } = useTranslation();

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div
      className={`sidebar ${isSidebarOpen ? `sidebar--open` : `sidebar--closed`}`}
    >
      <nav ref={ref} role='menu'>
        <div className='sidebar__top'>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleCloseSidebar}
            onKeyDown={(event) => event.key === 'Enter' && handleCloseSidebar()}
            className='sidebar__top__close'
            tabIndex={0}
            role='button'
          />
        </div>
        <ul className='sidebar__main'>
          {availableCities.map((city) => (
            <li key={city} className='sidebar__main__navigation'>
              <Link to={`/weather/${city}`}>{t(city)}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

export default Sidebar;
