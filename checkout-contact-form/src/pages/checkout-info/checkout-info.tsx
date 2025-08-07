import { Navbar } from '@/components/navbar/navbar';
import styles from './checkout-info-styles.module.css';
import { FormInfoTemplate } from '@/templates/form-info-template/form-info-template';
import { FormInfoTitle } from '@/components/form-info-title/form-info-title';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getValidateReferrerToken } from '@/api/get/validate-referrer-token/get-validate-referrer-token';
import { useNavigate } from 'react-router-dom';

export const CheckoutInfo = () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    if (data) {
      setReferrer(data.data.referrer);
      setToken(data.data.token);
    }
  }, [data]);

  useEffect(() => {
    if ((referrerParam === "" || referrerParam === null || tokenParam === "" || tokenParam === null) && !data?.success) {
      navigate('/404');
    }
  }, [referrerParam, tokenParam, data?.success]);

  return (
    <section className={styles['checkout-info-container']}>
      <Navbar />

      <FormInfoTitle />

      <FormInfoTemplate referrer={referrer} token={token} isValidParams={!!data?.success} />
    </section>
  );
};
