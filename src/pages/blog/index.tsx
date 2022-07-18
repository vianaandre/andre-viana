import { Container } from 'common/styles/pages/container';
import { NextPage } from 'next';
import Head from 'next/head';
import { Header } from 'components/Blog/Header';
import { Articles } from 'components/Blog/Articles';

const Blog: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>André // Blog</title>
      </Head>
      <main>
        <Header />
        <Articles />
      </main>
    </Container>
  );
};

export default Blog;
