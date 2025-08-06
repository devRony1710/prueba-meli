import { Input } from '@/components/input/input';
import styles from './form-info-template-styles.module.css';
import { Selector } from '@/components/selector/selector';
import { lazy, Suspense, useRef } from 'react';
import { LoadingCircle } from '@/components/loading-circle/loading-circle';

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));

export const FormInfoTemplate = () => {
  const recaptchaRef = useRef<any>(null);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      console.log('Please verify the reCAPTCHA');
      return;
    }

    console.log('Form submitted');
  };

  return (
    <form className={styles['form-info-template']} onSubmit={handleOnSubmit}>
      <Input label="First Name" name="name" type="text" />
      <Selector />
      <Input label="Address" name="address" type="text" />
      <Input label="Phone" name="phone" type="text" maxLength={10} />
      <Suspense fallback={<LoadingCircle />}>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
        />
      </Suspense>

      <button type="submit">Submit</button>
    </form>
  );
};
