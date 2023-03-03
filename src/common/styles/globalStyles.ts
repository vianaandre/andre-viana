import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *::-webkit-scrollbar {
        width: 6px;
        height: 8px;
    }
    *::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.purble.main};
        border-radius: 6px;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts.family.primary};
    }
    html {
        font-size: 1rem;
    }
    body {
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.colors.primary.main};
        overflow-x: hidden;
    }
    html, body { 
      scroll-behavior: smooth !important
    }
    body, input, textarea, button {
        font-weight: normal;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: normal;
        margin: 0;
    }
    p {
      margin: 0;
    }
    button {
        cursor: pointer;
        box-shadow: none;
        border: none;
        background-color: transparent;
        position: relative;
        overflow: hidden;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.dark}
    }
    ol, ul, li {
        list-style: none;
        list-style-type: none;
    }
    ul {
        padding-left: 0;
        margin-bottom: 0;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
