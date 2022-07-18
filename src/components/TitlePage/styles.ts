import styled from 'styled-components';

export const ContainerTitlaPage = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
        font-size: ${({ theme }) => theme.fonts.sizes.heading01};
        font-weight: bold;
        font-family: ${({ theme }) => theme.fonts.styles.title};
        color: ${({ theme }) => theme.colors.title};
        padding: 0;
    }

    > div {
        ul.breadcrumb {
            display: flex;

            li {
                a {
                    font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
                    font-weight: 500;
                    font-family: ${({ theme }) => theme.fonts.styles.text};
                    color: ${({ theme }) => theme.colors.gray_200};

                    transition: 400ms;

                    &:hover {
                        transition: 400ms;
                        filter: brightness(0.8);
                    }
                }
            }
            li::after {
                content: '/';
                font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
                font-weight: 500;
                font-family: ${({ theme }) => theme.fonts.styles.text};
                color: ${({ theme }) => theme.colors.gray_200};

                margin: 0 4px;
            }
            li:last-child::after {
                display: none;
            }
        }
    }
`;
