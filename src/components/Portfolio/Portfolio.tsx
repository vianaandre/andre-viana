import React from 'react';
import Link from 'next/link';
import * as Tooltip from '@radix-ui/react-tooltip';

import { Container } from 'components/Container';
import { projects } from 'common/data/portfolio';
import { ContainerPortfolioLayout } from './styles';
import { CardProject } from './CardProject';

export const PortfolioLayout: React.FC = () => {
  return (
    <ContainerPortfolioLayout>
      <Container>
        <div className="content">
          <h2 className="title">Portfólio. Projetos.</h2>
          <p>
            Bem-vindo à minha página de
            {' '}
            <strong>projetos</strong>
            . Aqui você encontrará uma seleção dos
            {' '}
            <strong>trabalhos mais recentes</strong>
            {' '}
            e relevantes que realizei.
          </p>
          <div className="projects">
            {projects.map((item) => (
              <CardProject key={item.title} {...item} />
            ))}
          </div>
          <div className="action">
            <p>
              Caso tenha gostado de algum projeto meu e precise de um desenvolvedor, fique à vontade para entrar em
              {' '}
              <strong>contato comigo</strong>
              . Podemos conversar sobre suas
              {' '}
              <strong>ideias</strong>
              {' '}
              e negociar para colocá-las em
              {' '}
              <strong>prática</strong>
              ..
            </p>
            <Tooltip.Provider delayDuration={100}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div>
                    <Link href="/contact" prefetch>
                      <a>Entrar em contato</a>
                    </Link>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="tooltip_footer" sideOffset={5} side="bottom">
                    <p>Me mande um e-mail</p>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>
      </Container>
    </ContainerPortfolioLayout>
  );
};
