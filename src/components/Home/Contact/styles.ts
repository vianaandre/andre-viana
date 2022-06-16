import styled from 'styled-components';

export const ContainerContact = styled.section`
    margin-top: ${({ theme }) => theme.spacing(12.75)};
`;
export const ContainerContent = styled.div`
    display: flex;
    align-items: flex-start;

    > div {
        flex: 1;
        padding-right: ${({ theme }) => theme.spacing(12.75)};

        margin-top: ${({ theme }) => theme.spacing(4)};
        ul {
            margin-top: ${({ theme }) => theme.spacing(4)};

            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            li {
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(1.5)};

                h4 {
                    font-size: ${({ theme }) => theme.fonts.sizes.sMedium};
                    font-weight: 500;
                    font-family: ${({ theme }) => theme.fonts.styles.text};
                    line-height: ${({ theme }) => theme.fonts.height.xlarge};
                    color: ${({ theme }) => theme.colors.text};
                    text-transform: uppercase;
                }
                a {
                    font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
                    font-weight: 600;
                    font-family: ${({ theme }) => theme.fonts.styles.text};
                    color: ${({ theme }) => theme.colors.text};
                }
                > div {
                    width: 5px;
                    height: 5px;

                    border-radius: 50%;

                    background-color: ${({ theme }) => theme.colors.primary};
                }
            }
        }
    }
    p {
        font-size: ${({ theme }) => theme.fonts.sizes.sMedium};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.styles.text};
        line-height: ${({ theme }) => theme.fonts.height.xlarge};
        color: ${({ theme }) => theme.colors.text};
    }
`;
export const ContainerForm = styled.form`
    width: 614px;

    padding: ${({ theme }) => `${theme.spacing(7)} ${theme.spacing(6.75)}`};

    background-color: ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};

    textarea {
        width: 100%;

        padding-bottom: 0.5rem;

        background-color: transparent;

        position: relative;

        border: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.text_placeholder};

        font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
        font-family: ${({ theme }) => theme.fonts.styles.text};
        font-weight: 600;
        color: ${({ theme }) => theme.colors.title};

        &::placeholder {
            color: ${({ theme }) => theme.colors.text_placeholder};
        }

        &:focus {
            outline: none;
            box-shadow: none;
        }

        resize: none;
    }
    div.textarea {
        position: relative;

        &::after {
            content: '';

            display: block;
            position: absolute;
            bottom: 6px;
            left: 0;

            transition: 400ms;

            width: 0%;
            height: 2px;

            background-color: ${({ theme }) => theme.colors.shape};
        }

        &.isActive::after {
            transition: 400ms;

            width: 100%;
        }
    }
    button {
        width: 100%;

        padding: ${({ theme }) => theme.spacing(2.5)} 0;

        border: 2px solid ${({ theme }) => theme.colors.shape};

        text-align: center;
        font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
        font-weight: 700;
        font-family: ${({ theme }) => theme.fonts.styles.text};
        color: ${({ theme }) => theme.colors.title};
        text-transform: uppercase;

        transition: 400ms;

        &:hover {
            transition: 400ms;

            background-color: ${({ theme }) => theme.colors.shape};

            color: ${({ theme }) => theme.colors.primary};
        }
        &:disabled:hover {
            background-color: transparent;

            color: ${({ theme }) => theme.colors.shape};
        }

        position: relative;
        overflow: hidden;
        transition: 400ms;

        &:disabled::after {
            content: '';

            display: block;
            position: absolute;
            top: 0;
            left: 0;

            width: 0%;
            height: 100%;

            background-color: ${({ theme }) => theme.colors.shape};

            transition: 400ms;

            animation: AnimationLoadingButtonSend 1200ms linear infinite;
        }

        @keyframes AnimationLoadingButtonSend {
            from {
                opacity: 1;
                width: 0%;
            }
            to {
                opacity: 0.2;
                width: 110%;
            }
        }
    }
`;
