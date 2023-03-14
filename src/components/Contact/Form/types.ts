import React from 'react';
import { LottieRef } from 'lottie-react';

export type useFormProps = {
    focusText: boolean;
    onFocusText: () => void;
    onBlurText: () => void;
    onDataForm: (data: FormDataProps) => void;
    dataForm: FormDataProps;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    loading: boolean;
    toast: ToastProps;
    onToast: (toast: ToastProps) => void;
    lottieIconCheck: LottieRef;
}

export type FormDataProps = {
    name: string;
    email: string;
    message: string;
}

export type ToastProps = {
    open: boolean;
    type: 'success' | 'error'
}
