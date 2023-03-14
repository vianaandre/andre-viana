import styled from 'styled-components';

export const ContainerHeader = styled.header`
    padding-top: ${({ theme }) => theme.spacing(9)};
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-top: ${({ theme }) => theme.spacing(3)};
    }
    div.container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
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
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    width: 18px;
                }
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                font-size: ${({ theme }) => theme.fonts.sizes[12]};
            }
        }
    }
`;

export const ContainerHeaderNav = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(5.25)};
        li {
            a {
                overflow: hidden;
                position: relative;
                display: flex;
                padding-bottom: 2px;
                p {
                    font-size: ${({ theme }) => theme.fonts.sizes[14]};
                    font-weight: ${({ theme }) => theme.fonts.weight.regular};
                    font-style: normal;
                    color: ${({ theme }) => theme.colors.primary.dark};
                    display: inline-block;
                    transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        font-size: ${({ theme }) => theme.fonts.sizes[12]};
                    }
                }
            }
            &.not_active {
                a {
                    &::before, &::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        left: 0;
                    }
                    &::before {
                        background-color: ${({ theme }) => theme.colors.purble.main};
                        height: 1px;
                        bottom: 0px;
                        transform-origin: 100% 50%;
                        transform: scaleX(0);
                        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
                    }
                    &::after {
                        content: attr(data-replace);
                        height: 100%;
                        top: 0;
                        font-size: ${({ theme }) => theme.fonts.sizes[14]};
                        transform-origin: 100% 50%;
                        transform: translate3d(200%, 0, 0);
                        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
                        color: ${({ theme }) => theme.colors.purble.main};
                        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                            font-size: ${({ theme }) => theme.fonts.sizes[12]};
                        }
                    }
                    &:hover::before {
                        transform-origin: 0% 50%;
                        transform: scaleX(1);
                    }
                    &:hover::after {
                        transform: translate3d(0, 0, 0);
                    }
                    &:hover {
                        p {
                            transform: translate3d(-200%, 0, 0);
                        }
                    }
                }
            }
            &.active {
                p {
                    color: ${({ theme }) => theme.colors.purble.main};
                    position: relative;
                    &::after {
                        content: "";
                        width: 100%;
                        height: 1px;
                        display: flex;
                        position: absolute;
                        bottom: -2px;
                        background-color: ${({ theme }) => theme.colors.purble.main};
                    }
                }
            }
        }
    }
`;
