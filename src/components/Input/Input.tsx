import React, { useState } from 'react';
import { ContainerInput } from './styles';
import { IInput } from './interface';

export const Input: React.FC<IInput> = ({ error, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ContainerInput className={isFocused ? 'isActive' : ''}>
      <input
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {error && <span>{error}</span>}
    </ContainerInput>
  );
};
