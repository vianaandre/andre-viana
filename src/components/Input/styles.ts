import styled from 'styled-components';

export const ContainerInput = styled.div`
    width: 100%;

    position: relative;

    &::after {
        content: '';

        display: block;
        position: absolute;
        bottom: 0;
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

    input {
        width: 100%;

        padding-bottom: 0.5rem;

        background-color: transparent;

        border: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.text_placeholder};

        font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
        font-family: ${({ theme }) => theme.fonts.styles.text};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.title};

        &::placeholder {
            color: ${({ theme }) => theme.colors.text_placeholder};
        }

        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
`;
