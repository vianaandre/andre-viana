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
          <h2>André Gustavo Viana</h2>
          <div className="office">
            <p>Desenvolvedor</p>
            <TypeAnimation
              cursor={false}
              sequence={[
                'Front-end',
                1000,
                'Back-end',
                1000,
                'Full-Stack',
                1000,
                'Mobile',
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
        </div>
      </Container>
    </ContainerApresentation>
  );
};
