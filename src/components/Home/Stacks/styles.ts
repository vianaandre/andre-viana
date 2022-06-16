import styled from 'styled-components';

export const ContainerStacks = styled.section`
    margin-top: ${({ theme }) => theme.spacing(6.5)};

    p {
        font-size: ${({ theme }) => theme.fonts.sizes.sMedium};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.styles.text};
        line-height: ${({ theme }) => theme.fonts.height.xlarge};
        color: ${({ theme }) => theme.colors.text};

        margin-top: ${({ theme }) => theme.spacing(4)};
    }
    div.list-stacks {
        display: flex;
        gap: ${({ theme }) => theme.spacing(12.75)};
    }
`;
export const ContainerListStacks = styled.ul`
    margin-top: ${({ theme }) => theme.spacing(6.5)};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(6)};
`;
