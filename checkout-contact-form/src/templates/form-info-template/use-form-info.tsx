import { useEffect, useRef, useState } from 'react';
import {
  formSchema,
  type UseFormInfoLogicInterface,
} from './form-info-template.types';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getCountriesList } from '@/api/get/get-countries-list/get-countries-list';
import { useQuery } from '@tanstack/react-query';
import { GET_COUNTRIES_LIST_KEY } from '@/common/request-contants/request-contants';
import { useMutation } from '@tanstack/react-query';
import { sendFormInfo } from '@/api/post/send-form-info/send-form-info';
import { useNavigate } from 'react-router-dom';
import type { ResponseUserInfo } from '@/api/get/get-user-info/get-user-info.types';
import toast from 'react-hot-toast';

export const useFormInfo = ({
  referrer,
  token,
  userData,
}: {
  referrer: string;
  token: string;
  userData: ResponseUserInfo;
}): UseFormInfoLogicInterface => {
  const recaptchaRef = useRef<any>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const navigate = useNavigate();

  const { data: countries } = useQuery({
    queryKey: [GET_COUNTRIES_LIST_KEY],
    queryFn: () => getCountriesList(),
  });

  const { mutate } = useMutation({
    mutationFn: () =>
      sendFormInfo({
        body: {
          name: watch('name'),
          address: watch('address'),
          phone: watch('phone'),
          country: watch('country').value,
          captchaToken: recaptchaRef.current?.getValue(),
        },
        referrer,
        token,
      }),
    onSuccess: () => {
      toast.success('Form info sent successfully');
      navigate(`/checkout-success?referrer=${referrer}&token=${token}`);
    },
    onError: () => {
      toast.error('An unexpected error occurred');
      navigate('/404');
    },
  });

  const {
    watch,
    reset,
    formState: { isValid, errors },
    control,
  } = useForm<z.infer<typeof formSchema>>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userData?.name ?? '',
      address: userData?.address ?? '',
      phone: userData?.phone ?? '',
      country: {
        value: userData?.country?.value ?? '',
        label: userData?.country?.label ?? '',
      },
    },
  });

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      console.error('Please verify the reCAPTCHA');
      return;
    }

    mutate();
  };

  useEffect(() => {
    if (userData) {
      reset({
        name: userData?.name ?? '',
        address: userData?.address ?? '',
        phone: userData?.phone ?? '',
        country: {
          value: userData?.country?.value ?? '',
          label: userData?.country?.label ?? '',
        },
      });
    }
  }, [userData]);

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
    countries: countries ?? [],
    watch,
  };
};
