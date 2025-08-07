import { Navbar } from '@/components/navbar/navbar';
import styles from './checkout-info-styles.module.css';
import { FormInfoTemplate } from '@/templates/form-info-template/form-info-template';
import { FormInfoTitle } from '@/components/form-info-title/form-info-title';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getValidateReferrerToken } from '@/api/get/validate-referrer-token/get-validate-referrer-token';

export const CheckoutInfo = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const referrerParam = searchParams.get('referrer');
  const tokenParam = searchParams.get('token');
  const [referrer, setReferrer] = useState('');
  const [token, setToken] = useState('');

  const { data } = useQuery({
    queryKey: ['validate-referrer-token', referrerParam, tokenParam],
    queryFn: () =>
      getValidateReferrerToken(referrerParam as string, tokenParam as string),
  });

  console.log(token, referrer);

  useEffect(() => {
    if (data) {
      setReferrer(data.data.referrer);
      setToken(data.data.token);
    }
  }, [data]);

  return (
    <section className={styles['checkout-info-container']}>
      <Navbar />

      <FormInfoTitle />

      <FormInfoTemplate />
    </section>
  );
};
