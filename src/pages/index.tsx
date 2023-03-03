import type { NextPage } from 'next';

import { Base } from 'layouts/Base';
import { Apresentation } from 'components/Apresentation';

const Home: NextPage = () => {
  return (
    <Base>
      <Apresentation />
    </Base>
  );
};

export default Home;
