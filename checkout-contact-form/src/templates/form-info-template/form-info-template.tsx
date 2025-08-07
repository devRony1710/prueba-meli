import { Input } from '@/components/input/input';
import styles from './form-info-template-styles.module.css';
import { Selector } from '@/components/selector/selector';
import { lazy, Suspense } from 'react';
import { LoadingCircle } from '@/components/loading-circle/loading-circle';
import { Button } from '@/components/button/button';
import { useFormInfo } from './use-form-info';
import { Controller } from 'react-hook-form';
const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));

export const FormInfoTemplate = () => {
  const {
    recaptchaRef,
    handleOnSubmit,
    isValid,
    control,
    errors,
    handleCaptchaVerify,
    captchaVerified,
    countries,
  } = useFormInfo();

  const countriesOptions = countries.map((country) => ({
    value: country.code,
    label: country.name,
  }));

  return (
    <form className={styles['form-info-template']} onSubmit={handleOnSubmit}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Input
            {...field}
            label="First Name"
            type="text"
            errorMessage={errors.name?.message}
          />
        )}
      />
      <Selector options={countriesOptions} />
      <Controller
        control={control}
        name="address"
        render={({ field }) => (
          <Input
            {...field}
            label="Address"
            name="address"
            type="text"
            errorMessage={errors.address?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <Input
            {...field}
            label="Phone"
            name="phone"
            type="text"
            maxLength={10}
            errorMessage={errors.phone?.message}
          />
        )}
      />
      <Suspense fallback={<LoadingCircle />}>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
          onChange={handleCaptchaVerify}
        />
      </Suspense>

      <div className={styles['form-buttons-container']}>
        <Button type="button" label="Cancel" />
        <Button label="Submit" disabled={!isValid || !captchaVerified} />
      </div>
    </form>
  );
};
