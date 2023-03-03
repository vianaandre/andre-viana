import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    padding-bottom: ${({ theme }) => theme.spacing(3)};
    div.container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(4)};
    }
    ul {
        display: flex;
        gap: ${({ theme }) => theme.spacing(6)};
    }
    p {
        font-size: ${({ theme }) => theme.fonts.sizes[14]};
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.colors.grey.main};
    }
`;
