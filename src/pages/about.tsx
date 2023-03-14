import React from 'react';
import type { NextPage } from 'next';

import { Base } from 'layouts/Base';
import { AboutLayout } from 'components/About';
import { SEO } from 'components/SEO';

const About: NextPage = () => {
  return (
    <Base>
      <SEO
        title="Sobre // André Viana"
        description="Desenvolvedor apaixonado por criação de aplicações web, com foco em responsividade, desempenho e qualidade. Sempre em busca de desafios novos"
        image="favicon.png"
        url="https://vianaandre.com/about"
      />
      <AboutLayout />
    </Base>
  );
};

export default About;
