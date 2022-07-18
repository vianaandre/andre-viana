import styled from 'styled-components';

export const ContainerHeader = styled.div`
    margin: 0 ${({ theme }) => theme.spacing(12)};
    margin-top: ${({ theme }) => theme.spacing(6)};

    p {
        margin-top: ${({ theme }) => theme.spacing(2)};
        padding-left: 8px;

        font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
        font-weight: 400;
        font-family: ${({ theme }) => theme.fonts.styles.text};
        color: ${({ theme }) => theme.colors.text};

        max-width: 804px;

        border-left: 3px solid ${({ theme }) => theme.colors.gray_200};
    }
`;
