import styled from 'styled-components';

export const Container404 = styled.main`
    div.content {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: ${({ theme }) => theme.spacing(3)};
        height: calc(100vh - 112px);
        div {
            display: flex;
        }
        a {
            font-size: ${({ theme }) => theme.fonts.sizes[16]};
            font-weight: ${({ theme }) => theme.fonts.weight.medium};
            color: ${({ theme }) => theme.colors.primary.dark};
            font-style: normal;
            position: relative;
            &:after {
                position: absolute;
                transition: ${({ theme }) => theme.transitions.medium};
                content: "";
                display: block;
                width: 0%;
                height: 1px;
                background-color: ${({ theme }) => theme.colors.primary.dark};
                bottom: 0px;
            }
            &:hover::after {
                transition: ${({ theme }) => theme.transitions.medium};
                width: 100%;
            }
        }
    }
`;
