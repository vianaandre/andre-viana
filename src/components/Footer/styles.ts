import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    margin-left: ${({ theme }) => theme.spacing(31.25)};
    margin-top: ${({ theme }) => theme.spacing(20)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};

    display: flex;
    justify-content: center;

    p {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        font-size: ${({ theme }) => theme.fonts.sizes.medium};
        font-family: ${({ theme }) => theme.fonts.styles.text};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.title};
    }
`;
