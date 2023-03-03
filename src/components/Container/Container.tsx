import React from 'react';

import { ContainerContainer } from './styles';
import { ContainerProps } from './interface';

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <ContainerContainer>
      {children}
    </ContainerContainer>
  );
};
