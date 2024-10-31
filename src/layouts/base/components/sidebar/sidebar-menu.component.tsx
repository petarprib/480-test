import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { availableCities } from '../../../../constants';
import { setIsSidebarOpen } from '../../../../features/ui/ui.slice';

export default function SidebarMenu() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleCloseSidebar = () => dispatch(setIsSidebarOpen(false));

  return (
    <nav role='menu'>
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
            <Link to={`/forecast/${city}`}>{t(city)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
