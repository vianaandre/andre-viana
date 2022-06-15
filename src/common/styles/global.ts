import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts.styles.default};
    }
    html {
        font-size: 62.5%; // 16px = 1.6rem
    }
    body {
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }
    body, input, textarea, button {
        font-weight: normal;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: normal;
    }
    button {
        cursor: pointer;
        box-shadow: none;
        border: none;
        background-color: transparent;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.shape}
    }
    ol, ul {
	    list-style: none;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
