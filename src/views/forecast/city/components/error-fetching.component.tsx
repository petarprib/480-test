import { useTranslation } from 'react-i18next';

export default function ErrorFetching() {
  const { t } = useTranslation();

  return <h1>{t('error_fetching')}</h1>;
}
