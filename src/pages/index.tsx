import type { NextPage } from 'next';

import { Base } from 'layouts/Base';
import { Apresentation } from 'components/Apresentation';
import { SEO } from 'components/SEO';

const Home: NextPage = () => {
  return (
    <Base>
      <SEO
        title="André Viana"
        description="André Viana | Desenvolvedor Front-end &amp; Desenvolvedor Back-end &amp; Desenvolvedor Full-Stack"
        image="favicon.png"
        url="https://vianaandre.com"
      />
      <Apresentation />
    </Base>
  );
};

export default Home;
