import type { Dispatch, SetStateAction } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import SelectInput from '../../../components/inputs/select/select.input';

import '../styles/base-layout.scss';

type HeaderProps = {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ setIsSidebarOpen }: HeaderProps) {
  const { i18n } = useTranslation();

  const handleOpenSidebar = () => setIsSidebarOpen(true);

  return (
    <header className='header'>
      <div className='header__menu-and-locale'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleOpenSidebar}
          onKeyDown={(event) => event.key === 'Enter' && handleOpenSidebar()}
          className='header__menu-and-locale__menu'
          tabIndex={0}
          role='button'
        />
        <SelectInput
          value={i18n.language}
          onChange={(event) => i18n.changeLanguage(event.target.value)}
          options={[
            { label: 'English', value: 'en' },
            { label: 'Español', value: 'es' },
          ]}
        />
      </div>
    </header>
  );
}
