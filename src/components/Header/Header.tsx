import { Container } from 'components/Container';
import React, { useEffect, useState } from 'react';
import { menuOptions } from 'common/data/header';
import Link from 'next/link';

import { ContainerHeader, ContainerHeaderNav } from './styles';

export const Header: React.FC = () => {
  const [isActiveLink, setIsActiveLink] = useState<string>();

  useEffect(() => {
    setIsActiveLink(window.location.pathname);
  }, []);

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
              <li key={item.link} className={`${isActiveLink === item.link ? 'active' : 'not_active'}`}>
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
