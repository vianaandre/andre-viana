import styled from 'styled-components';

export const ContainerContainer = styled.div.attrs({
  className: 'container',
})`
    width: ${({ theme }) => theme.breakpoints.desktop};
    margin: 0 auto;
    position: relative;
    padding: 0px ${({ theme }) => theme.spacing(2.5)};
    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: ${({ theme }) => theme.breakpoints.tablet};
        margin: 0 auto;
        padding: 0 ${({ theme }) => theme.spacing(2.5)};
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: ${({ theme }) => theme.breakpoints.mobile};
        margin: 0 auto;
        padding: 0 ${({ theme }) => theme.spacing(2)};
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        max-width: 524px;
        margin: 0 auto;
        padding: 0 ${({ theme }) => theme.spacing(2)};
    }
`;
