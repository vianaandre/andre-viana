import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* *::-webkit-scrollbar {
        width: 6px;
        height: 8px;
    }
    *::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.purble.main};
        border-radius: 6px;
    } */
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
    h2.title {
        font-size: ${({ theme }) => theme.fonts.sizes[36]};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        font-style: normal;
        color: ${({ theme }) => theme.colors.primary.dark};
        line-height: ${({ theme }) => theme.fonts.height[150]};
    }
    h4.title {
        font-size: ${({ theme }) => theme.fonts.sizes[24]};
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
        font-style: normal;
        color: ${({ theme }) => theme.colors.primary.dark};
        line-height: ${({ theme }) => theme.fonts.height[125]};
    }
    div.content {
        padding: 0px ${({ theme }) => theme.spacing(20)};
        display: flex;
        position: relative;
        overflow: hidden;
        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            padding: 0px;
        }
    }
    ::-moz-selection { /* Code for Firefox */
        color: ${({ theme }) => theme.colors.primary.main};
        background: ${({ theme }) => theme.colors.purble.main};
    }

    ::selection {
        color: ${({ theme }) => theme.colors.primary.main};
        background: ${({ theme }) => theme.colors.purble.main};
    }
    .tooltip_footer {
        p {
            font-size: ${({ theme }) => theme.fonts.sizes[12]};
            font-weight: 400;
            font-style: normal;
            color:${({ theme }) => theme.colors.primary.dark};
            padding: 2px 6px;
            background-color: ${({ theme }) => theme.colors.primary.main};
            border: 1px solid ${({ theme }) => theme.colors.primary.dark};
        }
    }
    .toast_viewport {
        --viewport-padding: 25px;
        position: fixed;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        padding: var(--viewport-padding);
        gap: 10px;
        width: 390px;
        max-width: 100vw;
        margin: 0;
        list-style: none;
        z-index: 2147483647;
        outline: none;
        li {
            border: 1px solid ${({ theme }) => theme.colors.success};
            display: flex;
            align-items: flex-start;
            position: relative;
            padding: ${({ theme }) => theme.spacing(2)};
            padding-top: ${({ theme }) => theme.spacing(1.5)};
            gap: ${({ theme }) => theme.spacing(1.5)};
            .title {
                padding-top: 4px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 4px;
                h6 {
                    font-size: ${({ theme }) => theme.fonts.sizes[16]};
                    font-weight: ${({ theme }) => theme.fonts.weight.regular};
                    font-family: ${({ theme }) => theme.fonts.family.primary};
                    color: ${({ theme }) => theme.colors.primary.dark}
                }
                p {
                    font-size: ${({ theme }) => theme.fonts.sizes[14]};
                    font-weight: ${({ theme }) => theme.fonts.weight.regular};
                    font-family: ${({ theme }) => theme.fonts.family.primary};
                    color: ${({ theme }) => theme.colors.grey.dark};
                }
            }
            button {
                position: absolute;
                right: ${({ theme }) => theme.spacing(1)};
                top: ${({ theme }) => theme.spacing(1)};
                padding: 4px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: ${({ theme }) => theme.transitions.medium};
                &:hover {
                    background-color: ${({ theme }) => theme.colors.primary.light};
                    transition: ${({ theme }) => theme.transitions.medium};
                }
            }
        }
    }
    .toast_root {
        background-color: white;
        border-radius: 6px;
        box-shadow: none;
        padding: 15px;
        display: grid;
        grid-template-areas: 'title action' 'description action';
        grid-template-columns: auto max-content;
        column-gap: 15px;
        align-items: center;
    }
    .toast_root[data-state='open'] {
        animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    .toast_root[data-state='closed'] {
        animation: hide 100ms ease-in;
    }
    .toast_root[data-swipe='move'] {
        transform: translateX(var(--radix-toast-swipe-move-x));
    }
    .toast_root[data-swipe='cancel'] {
        transform: translateX(0);
        transition: transform 200ms ease-out;
    }
    .toast_root[data-swipe='end'] {
        animation: swipeOut 100ms ease-out;
    }
    @keyframes hide {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    @keyframes slideIn {
        from {
            transform: translateX(calc(100% + var(--viewport-padding)));
        }
        to {
            transform: translateX(0);
        }
    }
    @keyframes swipeOut {
        from {
            transform: translateX(var(--radix-toast-swipe-end-x));
        }
        to {
            transform: translateX(calc(100% + var(--viewport-padding)));
        }
    }

`;
