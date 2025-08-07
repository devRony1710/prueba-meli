import { Navbar } from '@/components/navbar/navbar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/button/button';

export const CheckoutSuccess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section>
      <Navbar />
      <div style={{padding: '2rem'}}>
        <h1>{t('checkoutSuccessTitle')}</h1>
        <Button label={t('checkoutSuccessButton')} onClick={() => navigate('/')} />
      </div>
    </section>
  );
};
