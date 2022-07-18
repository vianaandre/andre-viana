import styled from 'styled-components';

export const ContainerArticles = styled.div`
    margin: 0 ${({ theme }) => theme.spacing(12)};
    margin-top: ${({ theme }) => theme.spacing(7)};

    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
            width: calc(100% / 3 - 2%);
            margin-bottom: ${({ theme }) => theme.spacing(6)};
        }
    }
`;
