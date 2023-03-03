import React from 'react';
import Link from 'next/link';

import { Container } from 'components/Container';
import { ContainerApresentation, ContainerApresentationButtons } from './styles';

export const Apresentation: React.FC = () => {
  return (
    <ContainerApresentation>
      <Container>
        <h2>André Gustavo Viana</h2>
        <p>
          Desenvolvedor
          {' '}
          <strong data-replace="Front-end">Full-Stack</strong>
        </p>
        <span>Comprometido em proporcionar a melhor experiência possível para o usuário.</span>
        <ContainerApresentationButtons>
          <Link href="/contact">
            <a className="animated-arrow">
              <span className="the-arrow -left">
                <span className="shaft" />
              </span>
              <span className="main">
                <span className="text">
                  Contato
                </span>
                <span className="the-arrow -right">
                  <span className="shaft" />
                </span>
              </span>
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="animated-arrow">
              <span className="the-arrow -left">
                <span className="shaft" />
              </span>
              <span className="main">
                <span className="text">
                  Portfólio
                </span>
                <span className="the-arrow -right">
                  <span className="shaft" />
                </span>
              </span>
            </a>
          </Link>
        </ContainerApresentationButtons>
      </Container>
    </ContainerApresentation>
  );
};
