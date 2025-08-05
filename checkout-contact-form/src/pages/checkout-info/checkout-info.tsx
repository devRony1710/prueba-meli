import { Navbar } from '@/components/navbar/navbar';
import styles from './checkout-info-styles.module.css';
import { FormInfoTemplate } from '@/templates/form-info-template/form-info-template';
import { FormInfoTitle } from '@/components/form-info-title/form-info-title';

export const CheckoutInfo = () => {
  return (
    <section className={styles['checkout-info-container']}>
      <Navbar />

      <FormInfoTitle />

      <FormInfoTemplate />
    </section>
  );
};
