import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'common/styles/globalStyles';
import React from 'react';
import { theme } from 'common/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
