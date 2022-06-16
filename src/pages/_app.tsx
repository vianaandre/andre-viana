import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/styles/theme';
import { GlobalStyle } from 'common/styles/global';
import { Sidebar } from 'components/Sidebar';
import { settings } from 'config/settings';
import { MouseHelper } from 'components/MouseHelper';
import { Footer } from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Sidebar data={settings.info} />
            <MouseHelper />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;
