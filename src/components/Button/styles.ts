import styled, { css } from 'styled-components';
import { IContainerButton } from './interface';

export const ContainerButton = styled.button<IContainerButton>`
    padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(2.5)}`};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    border-radius: 4px;

    font-size: ${({ theme }) => theme.spacing(1.75)};
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.styles.title};
    color: ${({ theme }) => theme.colors.button};
    text-transform: uppercase;

    box-sizing: border-box;

    height: ${({ theme }) => theme.spacing(4.75)};

    background-color: ${({ theme, typeStyle }) => (typeStyle === 'primary' ? theme.colors.primary : 'transparent')};

    transition: 400ms;

    &:hover {
        transition: 400ms;
        background-color: ${({ theme, typeStyle }) => (typeStyle === 'primary'
    ? theme.colors.primary
    : theme.colors.primary)};
        ${({ typeStyle }) => typeStyle === 'primary'
            && css`
                filter: brightness(0.8);
            `}
    }
`;
