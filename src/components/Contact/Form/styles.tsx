import styled from 'styled-components';

export const ContainerForm = styled.div`
    margin-top: ${({ theme }) => theme.spacing(12)};
    display: flex;
    gap: ${({ theme }) => theme.spacing(7)};
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(5)};
        margin-top: ${({ theme }) => theme.spacing(9)};
    }
    div.form {
        width: 50%;
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            width: 100%;
        }
    }
    h4 {
        font-size: ${({ theme }) => theme.fonts.sizes[20]};
        font-family: ${({ theme }) => theme.fonts.family.primary};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        font-style: normal;
        color: ${({ theme }) => theme.colors.primary.dark};
        margin-bottom: ${({ theme }) => theme.spacing(3)};
    }
    form {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(1.5)};
        div {
            display: flex;
            flex-direction: column;
            gap: 4px;
            &.text_area {
                label {
                    font-size: ${({ theme }) => theme.fonts.sizes[14]};
                    font-weight: ${({ theme }) => theme.fonts.weight.medium};
                    font-style: normal;
                    color: ${({ theme }) => theme.colors.grey.dark};
                }
                textarea {
                    padding: ${({ theme }) => theme.spacing(1.25)} ${({ theme }) => theme.spacing(1.5)};
                    border-radius: 4px;
                    border: 1px solid ${({ theme }) => theme.colors.grey.dark};
                    font-size: ${({ theme }) => theme.fonts.sizes[14]};
                    font-weight: ${({ theme }) => theme.fonts.weight.regular};
                    background-color: transparent;
                    resize: none;
                    transition: ${({ theme }) => theme.transitions.medium};
                    &:focus {
                        transition: ${({ theme }) => theme.transitions.medium};
                        outline: none;
                        box-shadow: none;
                        border-color: ${({ theme }) => theme.colors.purble.main};
                    }
                    &::placeholder {
                        color: ${({ theme }) => theme.colors.grey.light};
                    }
                }
                &.active {
                    label {
                        color: ${({ theme }) => theme.colors.purble.main};
                    }
                } 
            }
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${({ theme }) => theme.spacing(1)};
            width: 100%;
            max-width: 150px;
            padding: ${({ theme }) => theme.spacing(1.25)} 0px;
            text-align: center;
            background-color: ${({ theme }) => theme.colors.purble.main};
            border-radius: 4px;
            font-size: ${({ theme }) => theme.fonts.sizes[14]};
            font-weight: ${({ theme }) => theme.fonts.weight.medium};
            font-style: normal;
            color: ${({ theme }) => theme.colors.primary.main};
            transition: ${({ theme }) => theme.transitions.medium};

            &:hover {
                transition: ${({ theme }) => theme.transitions.medium};
                filter: brightness(1.2)
            }
            &:active {
                filter: brightness(1.4)
            }
        }
        .loader {
            border: 3px solid ${({ theme }) => theme.colors.primary.main};
            border-top: 3px solid ${({ theme }) => theme.colors.grey.dark};
            border-radius: 50%;
            width: ${({ theme }) => theme.spacing(2.25)};
            height: ${({ theme }) => theme.spacing(2.25)};;
            animation: spin 1s linear infinite;
        }
    }
    div.infos {
        flex: 1;
        h6 {
            font-size: ${({ theme }) => theme.fonts.sizes[16]};
            font-weight: ${({ theme }) => theme.fonts.weight.regular};
            color: ${({ theme }) => theme.colors.grey.dark};
            font-style: normal;
            margin-bottom: ${({ theme }) => theme.spacing(6)};
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                margin-bottom: ${({ theme }) => theme.spacing(4)};
            }
        }
        div {
            a {
                width: fit-content;
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(1)};
                font-size: ${({ theme }) => theme.fonts.sizes[14]};
                font-weight: ${({ theme }) => theme.fonts.weight.regular};
                color: ${({ theme }) => theme.colors.primary.dark};
                margin-top: ${({ theme }) => theme.spacing(2)};
            }
        }
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
