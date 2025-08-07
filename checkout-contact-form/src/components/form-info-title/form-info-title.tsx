import styles from './form-info-title-styles.module.css';
import { useTranslation } from 'react-i18next';

export const FormInfoTitle = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['form-info-title-container']}>
      <p>{t('formTitle')}</p>
      <p>{t('formSubtitle')}</p>
    </div>
  );
};
