import React from 'react';
import Image from 'next/image';
import MyPhoto from 'common/assets/eu.png';
import { ContainerMy } from './styles';

export const My: React.FC = () => {
  return (
    <ContainerMy>
      <div className="filter" />
      <Image
        src={MyPhoto}
        alt="Minha Foto"
        placeholder="blur"
        quality={100}
      />
    </ContainerMy>
  );
};
