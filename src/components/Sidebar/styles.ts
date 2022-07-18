import styled from 'styled-components';

export const ContainerSidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow: auto;
    width: ${({ theme }) => theme.spacing(31.25)};
    background-color: ${({ theme }) => theme.colors.primary_dark};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(5)}`};
`;
export const ContainerMenu = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: ${({ theme }) => theme.spacing(3.5)};

        li {
            position: relative;
            &::after {
                transition: 400ms;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0%;
                height: 100%;
                background-color: ${({ theme }) => theme.colors.primary};
                display: block;
            }
            &:hover::after {
                transition: 400ms;
                width: 80%;
            }
            p {
                position: relative;
                z-index: 1;
                padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
                width: 100%;
                font-size: ${({ theme }) => theme.fonts.sizes.heading04};
                font-family: ${({ theme }) => theme.fonts.styles.title};
                font-weight: bold;
            }
            &.isActive::after {
                width: 80%;
            }
        }
    }
`;
export const ContainerInfo = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(3)};

    li {
        display: flex;
        flex-direction: column;
        align-items: flex;
        gap: ${({ theme }) => theme.spacing(1)};
        h4 {
            font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
            font-weight: 600;
            font-family: ${({ theme }) => theme.fonts.styles.text};
            color: ${({ theme }) => theme.colors.text};
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        P {
            font-size: ${({ theme }) => theme.fonts.sizes.small};
            font-weight: 400;
            font-family: ${({ theme }) => theme.fonts.styles.text};
            color: ${({ theme }) => theme.colors.text};
        }
    }
`;
