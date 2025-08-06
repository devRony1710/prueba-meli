import { useRef, useState } from 'react';
import {
  formSchema,
  type UseFormInfoLogicInterface,
} from './form-info-template.types';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const useFormInfo = (): UseFormInfoLogicInterface => {
  const recaptchaRef = useRef<any>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const {
    formState: { isValid, errors },
    control,
  } = useForm<z.infer<typeof formSchema>>({
    mode: 'all',
    resolver: zodResolver(formSchema),
  });

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      console.log('Please verify the reCAPTCHA');
      return;
    }

    console.log('Form submitted');
  };

  const handleCaptchaVerify = () => {
    setCaptchaVerified(true);
  };

  return {
    recaptchaRef,
    handleOnSubmit,
    isValid,
    control,
    errors,
    captchaVerified,
    handleCaptchaVerify,
  };
};
