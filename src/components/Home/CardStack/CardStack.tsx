import React from 'react';
import Image from 'next/image';
import { ContainerCardStack } from './styles';
import { ICardStack } from './interface';

export const CardStack: React.FC<ICardStack> = ({ title, image }) => {
  return (
    <ContainerCardStack>
      <div className="photo">
        <Image src={image} alt={title} />
      </div>
      <h6>{title}</h6>
    </ContainerCardStack>
  );
};
