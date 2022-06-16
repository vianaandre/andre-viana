import styled from 'styled-components';

export const ContainerInfo = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 976px;
    padding-left: ${({ theme }) => theme.spacing(12)};

    background-color: ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(4)};

    span {
        font-size: ${({ theme }) => theme.fonts.sizes.heading04};
        font-family: ${({ theme }) => theme.fonts.styles.text};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
    }
    h1 {
        font-size: ${({ theme }) => theme.fonts.sizes.heading01};
        font-family: ${({ theme }) => theme.fonts.styles.title};
        font-weight: 700;
        color: ${({ theme }) => theme.colors.title};
    }
    p {
        font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
        font-family: ${({ theme }) => theme.fonts.styles.text};
        font-weight: 400;
        line-height: ${({ theme }) => theme.fonts.height.large};
        color: ${({ theme }) => theme.colors.text};

        max-width: 450px;
    }
    ul {
        display: flex;
        gap: ${({ theme }) => theme.spacing(3.5)};
        li {
            svg {
                transition: 400ms;
            }
        }
        li:hover {
            svg {
                transition: 400ms;
                color: ${({ theme }) => theme.colors.primary_dark} !important;
            }
        }
    }
`;
