import { Input } from '@/components/input/input';
import styles from './form-info-template-styles.module.css';
import { Selector } from '@/components/selector/selector';
import { lazy, Suspense, type FC } from 'react';
import { LoadingCircle } from '@/components/loading-circle/loading-circle';
import { Button } from '@/components/button/button';
import { useFormInfo } from './use-form-info';
import { Controller } from 'react-hook-form';
const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));
import { useTranslation } from 'react-i18next';
import type { FormInfoTemplateProps } from './form-info-template.types';
import { useNavigate } from 'react-router-dom';

export const FormInfoTemplate: FC<FormInfoTemplateProps> = ({
  referrer,
  token,
  isValidParams,
  userData,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    recaptchaRef,
    handleOnSubmit,
    isValid,
    control,
    errors,
    handleCaptchaVerify,
    captchaVerified,
    countries,
  } = useFormInfo({ referrer, token, userData });

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
            label={t('firstNameLabel')}
            type="text"
            errorMessage={errors.name?.message}
            defaultValue={userData?.name}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <Selector
            options={countriesOptions}
            onChange={field?.onChange}
            value={field?.value?.label}
            defaultValue={{ value: userData?.country?.value, label: userData?.country?.label }}
          />
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({ field }) => (
          <Input
            {...field}
            label={t('addressLabel')}
            name="address"
            type="text"
            errorMessage={errors.address?.message}
            defaultValue={userData?.address}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <Input
            {...field}
            label={t('phoneLabel')}
            name="phone"
            type="text"
            maxLength={10}
            errorMessage={errors.phone?.message}
            defaultValue={userData?.phone}
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
        <Button
          type="button"
          label={t('cancelButton')}
          onClick={() => navigate(-1)}
        />
        <Button
          label={t('submitButton')}
          disabled={!isValid || !captchaVerified || !isValidParams}
          type="submit"
        />
      </div>
    </form>
  );
};
