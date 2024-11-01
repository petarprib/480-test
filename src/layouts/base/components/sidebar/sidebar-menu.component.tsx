import { useTranslation } from 'react-i18next';

import SidebarMenuItem from './sidebar-menu-item.component';
import { availableCities } from '../../../../constants';
import paths from '../../../../routes/paths.routes';

export default function SidebarMenu() {
  const { t } = useTranslation();

  return (
    <nav className='sidebar__menu-wrapper'>
      <ul>
        {availableCities.map((city) => (
          <li key={city} className='sidebar__menu-wrapper__menu-item'>
            <SidebarMenuItem
              to={`/${paths.forecast}/${city}`}
              label={t(city)}
            />
          </li>
        ))}
        <SidebarMenuItem to={`/${paths.form}`} label={t('form')} />
      </ul>
    </nav>
  );
}
