import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    scroll-behavior: smooth;

    *::-webkit-scrollbar {
        width: 6px;
        height: 8px;
    }

    /* Handle */
    *::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 6px;
    }

    * {
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts.styles.default};
    }
    html {
        font-size: 1rem; // 16px = 1.6rem
    }
    body {
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.colors.primary_dark};
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
    ol, ul, li {
        list-style: none;
        list-style-type: none;
    }
    ul {
        padding-left: 0;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
