import { useTranslation } from 'react-i18next';

import SidebarMenuItem from './sidebar-menu-item.component';
import { availableCities } from '../../../../constants';
import routes from '../../../../routes/routes.constants';

export default function SidebarMenu() {
  const { t } = useTranslation();

  return (
    <nav className='sidebar__menu-wrapper'>
      <ul>
        {availableCities.map((city) => (
          <li key={city} className='sidebar__menu-wrapper__menu-item'>
            <SidebarMenuItem
              to={`/${routes.forecast}/${city}`}
              label={t(city)}
            />
          </li>
        ))}
        <SidebarMenuItem to={`/${routes.form}`} label={t('form')} />
      </ul>
    </nav>
  );
}
