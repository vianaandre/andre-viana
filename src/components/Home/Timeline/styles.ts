import styled from 'styled-components';
import { IContainerLine } from './interface';

export const ContainerTimeline = styled.div<IContainerLine>`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(2)};

    position: relative;

    padding-bottom: ${({ theme, isLastLine }) =>
        isLastLine ? 0 : theme.spacing(6)};
    padding-left: ${({ theme }) => theme.spacing(6.5)};

    cursor: pointer;

    p {
        flex: 1;

        font-size: ${({ theme }) => theme.spacing(1.75)};
        font-family: ${({ theme }) => theme.fonts.styles.text};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
        line-height: ${({ theme }) => theme.fonts.height.xlarge};

        margin-top: -4px;
    }
    div.year {
        position: absolute;
        left: 0;
        top: ${({ theme }) => theme.spacing(1)};

        transition: 400ms;

        &.isActive {
            transition: 400ms;
            left: -4px;
        }

        p {
            font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
            font-family: ${({ theme }) => theme.fonts.styles.text};
            font-weight: 500;
            color: ${({ theme }) => theme.colors.shape};
        }
    }
`;
export const ContainerCircleEffect = styled.div`
    width: ${({ theme }) => theme.spacing(4)};
    height: ${({ theme }) => theme.spacing(4)};

    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        opacity: 0;

        transition: 400ms;

        width: ${({ theme }) => theme.spacing(2.5)};
        height: ${({ theme }) => theme.spacing(2.5)};

        background-color: ${({ theme }) => theme.colors.primary};

        border-radius: 50%;

        display: flex;
        flex-direction: column;

        &.active {
            transition: 400ms;
            opacity: 1;
        }
    }
`;
export const ContainerLine = styled.div<IContainerLine>`
    width: 2px;
    height: calc(100% - ${({ theme }) => theme.spacing(4)} - 14px);

    position: absolute;
    left: 67px;
    top: calc(${({ theme }) => theme.spacing(4)} + 8px);

    background-color: ${({ theme }) => theme.colors.primary};

    display: ${({ isLastLine }) => (isLastLine ? 'none' : 'block')};
`;
