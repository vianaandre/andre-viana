import styled from 'styled-components';

export const ContainerCardStack = styled.li`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};

    cursor: pointer;

    h6 {
        font-size: 1.125rem;
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.styles.title};
        line-height: ${({ theme }) => theme.fonts.height.xlarge};
        color: ${({ theme }) => theme.colors.text};
    }
    div.photo {
        width: ${({ theme }) => theme.spacing(12.75)};
        display: flex;
        justify-content: center;
    }
`;
