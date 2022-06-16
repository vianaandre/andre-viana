import styled, { css } from 'styled-components';
import { IContainerButton } from './interface';

export const ContainerButton = styled.button<IContainerButton>`
    padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(2.5)}`};

    border-radius: 4px;
    ${({ theme, typeStyle }) =>
        typeStyle === 'outline' &&
        css`
            border: 2px solid ${theme.colors.primary};
        `}

    font-size: ${({ theme }) => theme.spacing(1.75)};
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.styles.title};
    color: ${({ theme }) => theme.colors.button};
    text-transform: uppercase;

    background-color: ${({ theme, typeStyle }) =>
        typeStyle === 'primary' ? theme.colors.primary : 'transparent'};

    transition: 400ms;

    &:hover {
        transition: 400ms;
        background-color: ${({ theme, typeStyle }) =>
            typeStyle === 'primary' ? 'transparent' : theme.colors.primary};
        ${({ theme, typeStyle }) =>
            typeStyle === 'primary' &&
            css`
                border: 2px solid ${theme.colors.primary};
            `}
    }
`;
