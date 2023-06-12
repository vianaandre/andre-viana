import styled from 'styled-components';

export const ContainerAbout = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};
    margin-bottom: ${({ theme }) => theme.spacing(12.75)};

    h2.title {
        background-image: linear-gradient(180deg, ${({ theme }) => theme.colors.purble.main} 0%, ${({ theme }) => theme.colors.pink.main} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    div.content {
        flex-direction: column;
        div.info_about {
            margin-top: ${({ theme }) => theme.spacing(4)};
            display: flex;
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                flex-direction: column;
                align-items: flex-start;
                gap: ${({ theme }) => theme.spacing(5)};
            }
            img {
                border-radius: 4px !important;
                width: 50%;
                object-fit: cover;
                @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    width: 55%;
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    width: 100%;
                    display: flex;
                }
            }
            div.text {
                flex: 1;
                padding-left: ${({ theme }) => theme.spacing(4)};
                display: flex;
                flex-direction: column;
                height: 440px;
                @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
                    height: 521px;
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    padding-left: ${({ theme }) => theme.spacing(2)};
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    padding-left: 0px;
                }
                p {
                    font-size: ${({ theme }) => theme.fonts.sizes[16]};
                    font-weight: 400;
                    font-style: normal;
                    color: ${({ theme }) => theme.colors.grey.dark};
                    line-height: ${({ theme }) => theme.fonts.height[160]};
                    strong {
                        color: ${({ theme }) => theme.colors.primary.dark};
                        font-weight: ${({ theme }) => theme.fonts.weight.bold};
                    }
                    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                        line-height: ${({ theme }) => theme.fonts.height[150]};
                    }
                }
                a {
                    margin-top: auto;
                    font-size: ${({ theme }) => theme.fonts.sizes[16]};
                    font-style: normal;
                    font-weight: ${({ theme }) => theme.fonts.weight.bold};
                    display: flex;
                    align-items: center;
                    gap: ${({ theme }) => theme.spacing(1.5)};
                    position: relative;
                    width: 152px;
                    border-radius: ${({ theme }) => theme.radii.min};
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        margin-top: ${({ theme }) => theme.spacing(3)};
                    }
                    lord-icon {
                        bottom: 0px;
                        width: 100% !important;
                        display: flex;
                        padding-left: ${({ theme }) => theme.spacing(5.5)};
                        position: absolute;
                    }
                }
            }
            svg {
                path {
                    fill: ${({ theme }) => theme.colors.primary.dark};
                }
            }
        }
        div.bio {
            margin-top: ${({ theme }) => theme.spacing(4)};
            blockquote {
                margin-top: ${({ theme }) => theme.spacing(3)};
                font-size:  ${({ theme }) => theme.fonts.sizes[16]};
                font-weight: ${({ theme }) => theme.fonts.weight.regular};
                font-style: italic;
                color: ${({ theme }) => theme.colors.grey.dark};
                position: relative;
                padding-left: ${({ theme }) => theme.spacing(2)};
                &::before {
                    content: "";
                    height: 100%;
                    width: 2px;
                    display: block;
                    position: absolute;
                    left: 0px;
                    background-color: ${({ theme }) => theme.colors.primary.light};
                }
            }
            button {
                margin-top: ${({ theme }) => theme.spacing(3)};
                font-size: ${({ theme }) => theme.fonts.sizes[16]};
                font-style: normal;
                font-weight: ${({ theme }) => theme.fonts.weight.bold};
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(1.5)};
                position: relative;
                width: 152px;
                height: ${({ theme }) => theme.spacing(3)};
                border-radius: ${({ theme }) => theme.radii.min};
                lord-icon {
                    bottom: -16px;
                    width: 100% !important;
                    display: flex;
                    padding-left: 0px;
                    position: absolute;
                }
            }
        }
        div.career {
            margin-top: ${({ theme }) => theme.spacing(4)};
            ul {
                margin-top: ${({ theme }) => theme.spacing(2)};
                display: flex;
                flex-direction: column;
                gap: ${({ theme }) => theme.spacing(4)};
                li {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    h6 {
                        font-size: ${({ theme }) => theme.fonts.sizes[16]};
                        font-style: normal;
                        font-weight: ${({ theme }) => theme.fonts.weight.regular};
                        color: ${({ theme }) => theme.colors.primary.dark};
                    }
                    p {
                        font-size: ${({ theme }) => theme.fonts.sizes[14]};
                        font-style: normal;
                        font-weight: ${({ theme }) => theme.fonts.weight.regular};
                        color: ${({ theme }) => theme.colors.grey.dark};
                        a {
                            color: ${({ theme }) => theme.colors.primary.dark};
                            text-decoration: underline;
                        }
                    }
                    span {
                        font-size: ${({ theme }) => theme.fonts.sizes[14]};
                        font-style: normal;
                        font-weight: ${({ theme }) => theme.fonts.weight.regular};
                        color: ${({ theme }) => theme.colors.grey.dark};
                    }
                }
            }
        }
        div.skills {
            margin-top: ${({ theme }) => theme.spacing(4)};
            p {
                font-size: ${({ theme }) => theme.fonts.sizes[16]};
                font-style: normal;
                margin-top: ${({ theme }) => theme.spacing(2)};
                color: ${({ theme }) => theme.colors.grey.dark};
            }
        }
    }
`;
