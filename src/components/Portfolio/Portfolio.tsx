import React from 'react';

import { Container } from 'components/Container';
import { projects } from 'common/data/portfolio';
import { ScrollIndicator } from 'components/ScrollIndicator';
import { ContainerPortfolioLayout } from './styles';
import { CardProject } from './CardProject';

export const PortfolioLayout: React.FC = () => {
  return (
    <ContainerPortfolioLayout>
      <ScrollIndicator />
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
        </div>
      </Container>
    </ContainerPortfolioLayout>
  );
};
