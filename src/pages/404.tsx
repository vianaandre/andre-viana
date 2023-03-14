import type { NextPage } from 'next';

import { SEO } from 'components/SEO';
import React from 'react';
import { Layout404 } from 'components/404';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <SEO
        title="André Viana // 404"
        description="Página não encontrada."
        image="favicon.png"
        url="https://vianaandre.com/404"
      />
      <Layout404 />
    </React.Fragment>
  );
};

export default Home;
