import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { LottieRef } from 'lottie-react';

import { useFormProps, FormDataProps, ToastProps } from './types';

export function useForm(): useFormProps {
  const isLottieIconCheck = useRef();
  const [isFocusText, setIsFocusText] = useState<boolean>(false);
  const [isDataForm, setIsDataForm] = useState<FormDataProps>({
    email: '',
    message: '',
    name: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isToast, setIsToast] = useState<ToastProps>({
    open: false,
    type: 'success',
  });

  const handleFocusText = () => setIsFocusText(true);
  const handleBlurText = () => setIsFocusText(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (isDataForm.email && isDataForm.email !== '' && isDataForm.name && isDataForm.name !== '') {
        await axios.post('https://uzer-ticket.herokuapp.com/https://27yxhjmv39.execute-api.us-east-1.amazonaws.com/dev/sendMail', {
          email: isDataForm.email,
          name: isDataForm.name,
          subject: 'Assunto',
          message: isDataForm.message,
        });

        setIsToast({
          open: true,
          type: 'success',
        });
        setIsDataForm({
          email: '',
          message: '',
          name: '',
        });
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isToast.open) {
        setIsToast({
          open: false,
          type: 'success',
        });
      }
    }, 6000);

    return () => clearTimeout(timeout);
  }, [isToast]);

  return {
    focusText: isFocusText,
    onBlurText: handleBlurText,
    onFocusText: handleFocusText,
    dataForm: isDataForm,
    onDataForm: setIsDataForm,
    onSubmit: handleSubmit,
    loading: isLoading,
    toast: isToast,
    onToast: setIsToast,
    lottieIconCheck: isLottieIconCheck as any as LottieRef,
  };
}
