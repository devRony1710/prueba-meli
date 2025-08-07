import { Navbar } from '@/components/navbar/navbar';
import styles from './previous-page-styles.module.css';
import { Button } from '@/components/button/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const PreviousPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToCheckout = () => {
    navigate('/checkout?referrer=previous-page&token=123456789');
  };

  const navigateToCheckoutUserMock = () => {
    navigate('/checkout/user-mock?referrer=previous-page&token=123456789');
  };
  
  return (
    <section className={styles['previous-page-container']}>
      <Navbar />

      <div className={styles['previous-page-content-wrapper']}>
        <h1 className={styles['previous-page-title']}>{t('previousPageTitle')}</h1>

        <Button label={t('previousPageButtonGoToCheckout')} onClick={navigateToCheckout} />
        <Button label={t('previousPageButtonGoToCheckoutUser')} onClick={navigateToCheckoutUserMock} />
      </div>
    </section>
  );
};
