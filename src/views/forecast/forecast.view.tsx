import { useTranslation } from 'react-i18next';

export default function Forecast() {
  const { t } = useTranslation();

  return <h1 className='page-title'>{t('select_city')}</h1>;
}
