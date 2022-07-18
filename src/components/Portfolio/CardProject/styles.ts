import styled from 'styled-components';

export const ContainerCardProject = styled.a`
    position: relative;
    height: 264px;
    width: 392px;
    display: flex;
    justify-content: center;
    align-items: center;

    div.hover {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        opacity: 0;
        transition: 200ms;
        z-index: 2;

        strong {
            font-size: ${({ theme }) => theme.fonts.sizes.heading05};
            font-family: ${({ theme }) => theme.fonts.styles.title};
            font-weight: 600;
            color: ${({ theme }) => theme.colors.title};
        }
        > div {
            margin-top: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
            div {
                width: ${({ theme }) => theme.spacing(3)};
                height: 2px;
                background-color: ${({ theme }) => theme.colors.gray_50};
            }
            span {
                font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
                font-family: ${({ theme }) => theme.fonts.styles.text};
                font-weight: 600;
                color: ${({ theme }) => theme.colors.gray_50};
            }
        }
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 0%;
        height: 264px;
        background-color: ${({ theme }) => theme.colors.primary};
        opacity: 0.6;
        transition: 400ms;
    }
    &:hover::after {
        transition: 400ms;
        width: 100%;
    }
    &:hover {
        div.hover {
            transition: 600ms;
            opacity: 1;
        }
    }
`;
