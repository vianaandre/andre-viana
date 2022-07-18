import styled from 'styled-components';

export const ContainerProjects = styled.section`
    margin: 0 ${({ theme }) => theme.spacing(12)};
    margin-top: ${({ theme }) => theme.spacing(6.5)};

    ul {
        display: flex;
        gap: 12px;
        margin-bottom: ${({ theme }) => theme.spacing(6.5)};
    }
    ul:last-child {
        display: flex;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing(9)};
    }
`;
