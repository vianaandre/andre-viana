import styled from 'styled-components';

export const ContainerHome = styled.div`
    margin-left: ${({ theme }) => theme.spacing(31.25)};

    div.content-page {
        padding: 0 ${({ theme }) => theme.spacing(12)};
        padding-right: ${({ theme }) => theme.spacing(12.75)};
    }
`;
