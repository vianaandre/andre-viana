import styled from 'styled-components';

export const ContainerCareer = styled.section`
    margin-top: ${({ theme }) => theme.spacing(6.5)};

    div.timeline {
        margin-top: ${({ theme }) => theme.spacing(4)};

        display: flex;
        flex-direction: column;
    }
`;
