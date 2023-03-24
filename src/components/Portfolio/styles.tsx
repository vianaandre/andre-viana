import styled from 'styled-components';

export const ContainerPortfolioLayout = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};
    margin-bottom: ${({ theme }) => theme.spacing(12.75)};
    h2.title {
        background: linear-gradient(180deg, #5F49E3 0%, #80FFEA 151.09%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-bottom: ${({ theme }) => theme.spacing(4)};
    }
    div.content {
        flex-direction: column;
        p {
            font-size: ${({ theme }) => theme.fonts.sizes[16]};
            font-weight: ${({ theme }) => theme.fonts.weight.regular};
            font-style: normal;
            color: ${({ theme }) => theme.colors.grey.dark};
            strong {
                font-weight: ${({ theme }) => theme.fonts.weight.bold};
                color: ${({ theme }) => theme.colors.primary.dark}
            }
        }
        div.projects {
            margin-top: ${({ theme }) => theme.spacing(12.75)};
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                margin-top: ${({ theme }) => theme.spacing(7)};
                gap: 0px;
            }
        }
        div.action {
            margin-top: ${({ theme }) => theme.spacing(12)};
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
                margin-bottom: ${({ theme }) => theme.spacing(4)};
            }

            a {
                font-size: ${({ theme }) => theme.fonts.sizes[18]};
                font-weight: ${({ theme }) => theme.fonts.weight.medium};
                font-style: normal;
                color: ${({ theme }) => theme.colors.primary.dark};
                position: relative;
                display: flex;
                width: fit-content;
                &:after {
                    content: "";
                    display: block;
                    width: 0%;
                    height: 1px;
                    background-color: ${({ theme }) => theme.colors.primary.dark};
                    position: absolute;
                    bottom: 0px;
                    transition: ${({ theme }) => theme.transitions.medium};
                }
                &:hover::after {
                    transition: ${({ theme }) => theme.transitions.medium};
                    width: 100%;
                }
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                margin-top: ${({ theme }) => theme.spacing(9)};
            }
        }
    }
`;
