import styled from 'styled-components';

export const ContainerCardProject = styled.div`
    display: flex;
    padding-bottom: ${({ theme }) => theme.spacing(9)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.light};
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(4)};
        padding-bottom: ${({ theme }) => theme.spacing(7)};
    }
    div.infos {
        flex: 1;
        padding-right: ${({ theme }) => theme.spacing(6)};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 250px;
        padding-bottom: 4px;
        h4 {
            font-size: ${({ theme }) => theme.fonts.sizes[24]};
            font-weight: ${({ theme }) => theme.fonts.weight.regular};
            font-style: normal;
            color: ${({ theme }) => theme.colors.primary.dark};
            letter-spacing: 0.05em;
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                margin-bottom: 0px;
            }
        }
        p, span {
            font-size: ${({ theme }) => theme.fonts.sizes[14]};
            font-weight: ${({ theme }) => theme.fonts.weight.regular};
            font-style: normal;
            color: ${({ theme }) => theme.colors.grey.dark};
            line-height: ${({ theme }) => theme.fonts.height[125]};
            text-align: justify;
        }
        div.link {
            display: flex;
            width: fit-content;
        }
        a {
            position: relative;
            font-size: ${({ theme }) => theme.fonts.sizes[16]};
            font-weight: ${({ theme }) => theme.fonts.weight.medium};
            font-style: normal;
            color: ${({ theme }) => theme.colors.primary.dark};
            display: flex;
            align-items: center;
            gap: 4px;
            width: fit-content;
            svg {
                opacity: 0;
                transition: ${({ theme }) => theme.transitions.medium};
            }
            &::after {
                transition: ${({ theme }) => theme.transitions.medium};
                content: "";
                position: absolute;
                bottom: 0px;
                background-color: ${({ theme }) => theme.colors.primary.dark};
                width: 0%;
                height: 0.6px;
            }
            &:hover::after {
                transition: ${({ theme }) => theme.transitions.medium};
                width: 100%;
            }
            &:hover {
                svg {
                    transition: ${({ theme }) => theme.transitions.medium};
                    opacity: 1;
                }
            }
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            padding-right: 0px;
            gap: ${({ theme }) => theme.spacing(3)};
        }
    }
`;

export const ContainerCardProjectImages = styled.div<{
    bgColor: string;
}>`
    position: relative;
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(2)} 0px ${({ theme }) => theme.spacing(2)};
    background-color: ${({ bgColor }) => bgColor};
    display: flex;
    justify-content: center;
    max-width: 40%;
    overflow: hidden;
    max-height: 250px;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-width: 100%;
    }
    img {
        margin-top: auto;
        height: fit-content !important;
        width: 100% !important;
    }
`;
