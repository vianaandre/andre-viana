import styled from 'styled-components';

export const ContainerApresentation = styled.div`
    height: calc(100vh - 121px - 106px);
    min-height: 400px;
    display: flex;
    align-items: center;
    div.content {
        flex-direction: column;
    }
    h2 {
        font-size: ${({ theme }) => theme.fonts.sizes[48]};
        font-style: normal;
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        color: ${({ theme }) => theme.colors.primary.dark};
        margin-bottom: ${({ theme }) => theme.spacing(1.5)};
    }
    p {
        font-size: ${({ theme }) => theme.fonts.sizes[20]};
        font-style: normal;
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        color: ${({ theme }) => theme.colors.primary.dark};
        overflow: hidden;
        strong {
            cursor: pointer;
            font-weight: ${({ theme }) => theme.fonts.weight.light};
            position: relative;
            background-image: linear-gradient(
                to right,
                ${({ theme }) => theme.colors.purble.main},
                ${({ theme }) => theme.colors.purble.main} 50%,
                ${({ theme }) => theme.colors.primary.dark} 50%
            );
            background-size: 200% 100%;
            background-position: -100%;
            display: inline-block;
            padding: 5px 0;
            position: relative;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all ${({ theme }) => theme.transitions.min} ease-in-out;
            &:after {
                content: "";
                background-color: ${({ theme }) => theme.colors.primary.dark};
                height: 1px;
                width: 100%;
                left: 0;
                bottom: 2px;
                position: absolute;
                transition: ${({ theme }) => theme.transitions.min};
            }
            &:before {
                content: '';
                background: ${({ theme }) => theme.colors.purble.main};
                display: block;
                position: absolute;
                bottom: -3px;
                left: 0;
                width: 0;
                height: 3px;
                transition: all ${({ theme }) => theme.transitions.min} ease-in-out;
            }
            &:hover {
                background-position: 0;
            }
            &:hover::before{
                width: 100%;
            }
            &:hover::after {
                background-color: ${({ theme }) => theme.colors.purble.main};
                transition: ${({ theme }) => theme.transitions.min};
            }
        }
    }
    span {
        font-size: ${({ theme }) => theme.fonts.sizes[14]};
        font-weight: 300;
        font-style: normal;
        color: ${({ theme }) => theme.colors.primary.dark};
    }
`;

export const ContainerApresentationButtons = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(14)};
    margin-top: ${({ theme }) => theme.spacing(6.5)};
    a {
        .the-arrow {
            width: 64px;
            transition: all ${({ theme }) => theme.transitions.min};
            &.-left {
                position: absolute;
                top: 60%;
                left: 0;
                > .shaft {
                    width: 0;
                    background-color: ${({ theme }) => theme.colors.primary.dark};
                    &:before, &:after {
                        width: 0;
                        background-color: ${({ theme }) => theme.colors.primary.dark};
                    }
                    &:before {
                        transform: rotate(0);
                    }
                    &:after {
                        transform: rotate(0);
                    }
                }
            }
            &.-right {
                top: 3px;
                
                > .shaft {
                    width: 64px;
                    transition-delay: ${({ theme }) => theme.transitions.min};
                    &:before, &:after { 
                        width: 16px;
                        transition-delay: ${({ theme }) => theme.transitions.min};
                        transition: all ${({ theme }) => theme.transitions.min};
                    }
                    &:before {
                        transform: rotate(40deg);
                    }
                    &:after {
                        transform: rotate(-40deg);
                    }
                }
            }
            > .shaft {
                background-color: ${({ theme }) => theme.colors.primary.dark};
                display: block;
                height: 1px;
                position: relative;
                transition: all ${({ theme }) => theme.transitions.min};
                transition-delay: 0;
                will-change: transform;

                &:before, &:after {
                    background-color: ${({ theme }) => theme.colors.primary.dark};
                    content: '';
                    display: block;
                    height: 1px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    transition: all ${({ theme }) => theme.transitions.min};
                    transition-delay: 0;
                }

                &:before {
                    transform-origin: top right;
                }

                &:after {
                    transform-origin: bottom right;
                }
            }
        }
        .text {
            font-size: ${({ theme }) => theme.fonts.sizes[24]};
            font-weight: 400;
            font-style: normal;
            color: ${({ theme }) => theme.colors.primary.dark};
        }
    }
    a.animated-arrow {
            display: inline-block;
            color: ${({ theme }) => theme.colors.primary.dark};
            font-size: 1.25em;
            font-style: italic;
            text-decoration: none;
            position: relative;
            transition: all ${({ theme }) => theme.transitions.min};
            &:hover {
                color: ${({ theme }) => theme.colors.primary.dark};
                > .the-arrow.-left {
                    > .shaft {
                        width: 64px;
                        transition-delay: ${({ theme }) => theme.transitions.min};
                        background-color: ${({ theme }) => theme.colors.primary.dark};
                        &:before, &:after {
                            width: 16px;
                            transition-delay: ${({ theme }) => theme.transitions.min};
                            background-color: ${({ theme }) => theme.colors.primary.dark};
                        }
                        &:before {
                            transform: rotate(40deg);
                        }
                        &:after {
                            transform: rotate(-40deg);
                        }
                    }
                }
                
                > .main {
                    transform: translateX(calc(64px + 16px));
                    > .the-arrow.-right {
                        > .shaft {
                            width: 0;
                            transform: translateX(200%);
                            transition-delay: 0;
                            &:before, &:after {
                                width: 0;
                                transition-delay: 0;
                                transition: all ${({ theme }) => theme.transitions.min};
                            }
                            &:before {
                                transform: rotate(0);
                            }
                            &:after {
                                transform: rotate(0);
                            }
                        }
                    }
                }
            }
            > .main {
                display: flex;
                align-items: center;
                transition: all ${({ theme }) => theme.transitions.min};
                > .text {
                    margin: 0 16px 0 0;
                    line-height: 1;
                }
                > .the-arrow {
                    position: relative;
                }
            }
        }
`;
