import { useTranslation } from 'react-i18next';

export default function ErrorFetching() {
  const { t } = useTranslation('forecast');

  return <h1 className='page-title'>{t('error_fetching')}</h1>;
}
