import styled from 'styled-components';

export const ContainerCardProject = styled.div`
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.light};
    width: 50%;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(4)};
        padding-bottom: ${({ theme }) => theme.spacing(7)};
    }
    &:nth-child(even) {
        border-left: 1px solid ${({ theme }) => theme.colors.primary.light};
        padding-right: 0px;
        padding-left: ${({ theme }) => theme.spacing(6)};
    }
    padding-top: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
    padding-right: ${({ theme }) => theme.spacing(6)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
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
    p {
        min-height: 160px;
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
        width: 100%;
        &:nth-child(even) {
            border-left: 0px;
            padding-right: 0px;
            padding-left: 0px;
        }
    }
`;
