import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'common/styles/pages/container';
import { Header } from 'components/Portfolio/Header';
import { Projects } from 'components/Portfolio/Projects';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>André // Portfólio</title>
      </Head>
      <main>
        <Header />
        <Projects />
      </main>
    </Container>
  );
};

export default Home;
