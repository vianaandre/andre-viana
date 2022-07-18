import React from 'react';
import { ContainerButton } from './styles';
import { IButton } from './interface';

export const Button: React.FC<IButton> = ({ title, typeStyle, ...rest }) => {
  return (
    <ContainerButton typeStyle={typeStyle} {...rest}>
      {title}
    </ContainerButton>
  );
};
