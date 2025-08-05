import { Navbar } from '@/components/navbar/navbar';
import styles from './checkout-info-styles.module.css';
import { FormInfoTemplate } from '@/templates/form-info-template/form-info-template';

export const CheckoutInfo = () => {
  return (
    <section className={styles['checkout-info-container']}>
      <Navbar />

      <div>
        <p>We're almost there</p>
        <p>Update your contact data</p>
      </div>

      <FormInfoTemplate />
    </section>
  );
};
