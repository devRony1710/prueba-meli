import { Navbar } from '@/components/navbar/navbar';
import styles from './previous-page-styles.module.css';
import { Button } from '@/components/button/button';
import { useNavigate } from 'react-router-dom';

export const PreviousPage = () => {
  const navigate = useNavigate();

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
        <h1 className={styles['previous-page-title']}>Previous Page</h1>

        <Button label="Go to Checkout" onClick={navigateToCheckout} />
        <Button label="Go to Checkout User" onClick={navigateToCheckoutUserMock} />
      </div>
    </section>
  );
};
