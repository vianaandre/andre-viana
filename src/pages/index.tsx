import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'common/styles/pages/container';
import { Intro } from 'components/Home/Intro';
import { About } from 'components/Home/About';
import { Career } from 'components/Home/Career';
import { My } from 'components/Home/My';
import { Stacks } from 'components/Home/Stacks';
import { Contact } from 'components/Home/Contact';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>André // Home</title>
      </Head>
      <main>
        <Intro />
        <My />
        <div className="content-page">
          <About />
          <Career />
          <Stacks />
          <Contact />
        </div>
      </main>
    </Container>
  );
};

export default Home;
