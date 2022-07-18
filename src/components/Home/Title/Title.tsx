import React from 'react';
import { ContainerTitle } from './styles';
import { ITitle } from './interface';

export const Title: React.FC<ITitle> = ({ title }) => {
  return <ContainerTitle>{title}</ContainerTitle>;
};
