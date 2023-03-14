import React from 'react';

import { ContainerInput } from './styles';
import { InputProps } from './types';
import { useInput } from './useInput';

export const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const { focus, onBlur, onFocus } = useInput();

  return (
    <ContainerInput className={`${focus ? 'active' : ''} ${rest.value && rest.value !== '' ? 'active' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...rest} onFocus={onFocus} onBlur={onBlur} />
    </ContainerInput>
  );
};
