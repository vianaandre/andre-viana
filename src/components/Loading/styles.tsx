import styled from 'styled-components';

export const ContainerLoading = styled.div`
    height: 100vh;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
    align-items: center;
    justify-content: center;
    width: 100vw;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    z-index: ${({ theme }) => theme.zIndex.OVERLAY};
    transition: ${({ theme }) => theme.transitions.medium};
    opacity: 1;
    div.logo {
        a {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        h1, p {
            font-size: ${({ theme }) => theme.fonts.sizes[24]};
            font-weight: ${({ theme }) => theme.fonts.weight.bold};
            font-style: normal;
            color: ${({ theme }) => theme.colors.primary.dark};
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                font-size: ${({ theme }) => theme.fonts.sizes[20]};
            }
        }
        p {
            font-size: ${({ theme }) => theme.fonts.sizes[14]};
            font-weight: ${({ theme }) => theme.fonts.weight.light};
            padding-right: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
            &::before {
                content: "";
                background-color: ${({ theme }) => theme.colors.primary.dark};
                display: block-size;
                height: 1px;
                width: 25px;
                /* animation: animationLoading 400ms ease both infinite; */
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    width: 18px;
                }
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                font-size: ${({ theme }) => theme.fonts.sizes[12]};
            }
        }
    }
    .loader {
        --height-of-loader: 4px;
        --loader-color: ${({ theme }) => theme.colors.primary.dark};
        width: 140px;
        height: var(--height-of-loader);
        border-radius: 30px;
        background-color: rgba(0,0,0,0.2);
        position: relative;
    }
    .loader::before {
        content: "";
        position: absolute;
        background: var(--loader-color);
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        border-radius: 30px;
        animation: moving 1s ease-in-out infinite;
    }
    @keyframes moving {
        50% {
            width: 100%;
        }
        100% {
            width: 0;
            right: 0;
            left: unset;
        }
    }
    &.disabled {
        transition: ${({ theme }) => theme.transitions.medium};
        opacity: 0;
        z-index: -1;
    }
`;
