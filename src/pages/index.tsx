import type { NextPage } from 'next';
import Head from 'next/head';
import { ContainerHome } from 'common/styles/pages/home';
import { Sidebar } from 'components/Sidebar';
import { settings } from 'config/settings';

const Home: NextPage = () => {
    return (
        <ContainerHome>
            <Head>
                <title>André // Portfólio</title>
            </Head>
            <main>
                <Sidebar data={settings.info} />
            </main>
        </ContainerHome>
    );
};

export default Home;
