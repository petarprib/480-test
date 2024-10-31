import { useTranslation } from 'react-i18next';

export default function Forecast() {
  const { t } = useTranslation();

  return <div>{t('select_city')}</div>;
}
