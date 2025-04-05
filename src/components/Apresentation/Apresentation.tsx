import React from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

import { Container } from 'components/Container';
import { theme } from 'common/styles/theme';
import { ContainerApresentation, ContainerApresentationButtons } from './styles';

export const Apresentation: React.FC = () => {
  return (
    <ContainerApresentation>
      <Container>
        <div className="content">
          <h2>André Viana</h2>
          <div className="office">
            <p>Stacks: </p>
            <TypeAnimation
              cursor={false}
              sequence={[
                'React.js',
                1000,
                'Next.js',
                1000,
                'TypeScript',
                1000,
                'Tailwind',
                1000,
                'TanStack',
                1000,
                'React Native',
                1000,
                'Node.js',
                1000,
                'Jest',
                1000,
                'Cypress',
                1000,
              ]}
              speed={50}
              style={{ fontSize: theme.fonts.sizes[20], fontWeight: theme.fonts.weight.light }}
              wrapper="strong"
              repeat={Infinity}
            />
          </div>
          <span>Comprometido em proporcionar a melhor experiência possível para o usuário.</span>
          <ContainerApresentationButtons>
            <Link href="/about">
              <a className="animated-arrow">
                <span className="the-arrow -left">
                  <span className="shaft" />
                </span>
                <span className="main">
                  <span className="text">
                    Sobre
                  </span>
                  <span className="the-arrow -right">
                    <span className="shaft" />
                  </span>
                </span>
              </a>
            </Link>
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
          </ContainerApresentationButtons>
        </div>
      </Container>
    </ContainerApresentation>
  );
};
