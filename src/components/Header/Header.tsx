import { Container } from 'components/Container';
import React from 'react';
import { menuOptions } from 'common/data/header';
import Link from 'next/link';

import { ContainerHeader, ContainerHeaderNav } from './styles';

export const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <Container>
        <div className="logo">
          <Link href="/">
            <a>
              <h1>André.</h1>
              <p>Viana</p>
            </a>
          </Link>
        </div>
        <ContainerHeaderNav>
          <ul>
            {menuOptions.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>
                  <a data-replace={item.text}>
                    <p>{item.text}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </ContainerHeaderNav>
      </Container>
    </ContainerHeader>
  );
};
