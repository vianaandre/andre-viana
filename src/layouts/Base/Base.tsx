import React from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { ContainerBase } from './styles';
import { BaseProps } from './interface';

export const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <ContainerBase>
      <Header />
      <main>{children}</main>
      <Footer />
    </ContainerBase>
  );
};
