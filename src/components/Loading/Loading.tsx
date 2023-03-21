import Link from 'next/link';
import React from 'react';

import { ContainerLoading } from './styles';

export const Loading: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <ContainerLoading className={`${isOpen ? '' : 'disabled'}`}>
      <div className="logo">
        <Link href="/">
          <a>
            <h1>André.</h1>
            <p>Viana</p>
          </a>
        </Link>
      </div>
      <div className="loader" />
    </ContainerLoading>
  );
};
