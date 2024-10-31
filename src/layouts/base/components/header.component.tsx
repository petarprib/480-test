import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import SelectInput from '../../../components/inputs/select/select.input';
import { setIsSidebarOpen } from '../../../features/ui/ui.slice';

export default function Header() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleOpenSidebar = () => dispatch(setIsSidebarOpen(true));

  return (
    <header className='header'>
      <div className='header__menu-and-lang'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleOpenSidebar}
          onKeyDown={(event) => event.key === 'Enter' && handleOpenSidebar()}
          className='header__menu-and-lang__menu'
          tabIndex={0}
          role='button'
        />
        <SelectInput
          value={i18n.language}
          onChange={(event) => i18n.changeLanguage(event.target.value)}
          options={[
            { label: 'EN', value: 'en' },
            { label: 'ES', value: 'es' },
          ]}
        />
      </div>
    </header>
  );
}
