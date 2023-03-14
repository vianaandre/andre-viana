import type { NextPage } from 'next';

import { Base } from 'layouts/Base';
import { PortfolioLayout } from 'components/Portfolio';
import { SEO } from 'components/SEO';

const Home: NextPage = () => {
  return (
    <Base>
      <SEO
        title="Portfólio // André Viana"
        description="Desenvolvedor web, especialista em desenvolvimento de aplicações web com foco em responsividade, desempenho e qualidade."
        image="favicon.png"
        url="https://vianaandre.com/portfolio"
      />
      <PortfolioLayout />
    </Base>
  );
};

export default Home;
