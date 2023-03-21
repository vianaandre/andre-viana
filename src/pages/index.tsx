import type { NextPage } from 'next';

import { Base } from 'layouts/Base';
import { Apresentation } from 'components/Apresentation';
import { SEO } from 'components/SEO';
import { Loading } from 'components/Loading';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Base>
      <SEO
        title="André Viana"
        description="André Viana | Desenvolvedor Front-end &amp; Desenvolvedor Back-end &amp; Desenvolvedor Full-Stack"
        image="favicon.png"
        url="https://vianaandre.com"
      />
      {!isLoading && <Apresentation />}
      <Loading isOpen={isLoading} />
    </Base>
  );
};

export default Home;
