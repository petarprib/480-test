import { useTranslation } from 'react-i18next';

export default function ForecastView() {
  const { t } = useTranslation('forecast');

  return <h1 className='page-title'>{t('select_city')}</h1>;
}
