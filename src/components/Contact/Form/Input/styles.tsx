import styled from 'styled-components';

export const ContainerInput = styled.div`
    label {
        font-size: ${({ theme }) => theme.fonts.sizes[14]};
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
        font-style: normal;
        color: ${({ theme }) => theme.colors.grey.dark};
        transition: ${({ theme }) => theme.transitions.medium};
    }
    input {
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
            transition: ${({ theme }) => theme.transitions.medium};
            color: ${({ theme }) => theme.colors.purble.main};
        }
        input {
            border-color: ${({ theme }) => theme.colors.purble.main};
        }
    }
`;
