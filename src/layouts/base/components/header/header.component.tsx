import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import IconButton from '../../../../components/icon-button/icon-button.component';
import SelectInput from '../../../../components/inputs/select/select-input.component';
import { setIsSidebarOpen } from '../../../../features/ui/ui.slice';

export default function Header() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { t } = useTranslation('header');

  return (
    <header id='header'>
      <IconButton
        icon={faBars}
        onClick={() => dispatch(setIsSidebarOpen(true))}
        ariaLabel={t('open_sidebar')}
      />
      <SelectInput
        value={i18n.language}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
        options={[
          { label: 'EN', value: 'en' },
          { label: 'ES', value: 'es' },
        ]}
      />
    </header>
  );
}
