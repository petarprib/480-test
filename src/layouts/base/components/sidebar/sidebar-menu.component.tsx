import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { availableCities } from '../../../../constants';

export default function SidebarMenu() {
  const { t } = useTranslation();

  return (
    <nav role='menu' className='sidebar__menu-wrapper'>
      <ul>
        {availableCities.map((city) => (
          <li key={city} className='sidebar__menu-wrapper__menu-item'>
            <Link to={`/forecast/${city}`}>{t(city)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
