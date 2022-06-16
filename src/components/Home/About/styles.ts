import styled from 'styled-components';

export const ContainerAbout = styled.section`
    margin-top: ${({ theme }) => theme.spacing(12.75)};
`;
export const ContainerContent = styled.div`
    margin-top: ${({ theme }) => theme.spacing(4)};
    p {
        font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.styles.text};
        line-height: ${({ theme }) => theme.fonts.height.xlarge};
        color: ${({ theme }) => theme.colors.text};
    }
    p.text-two {
        margin-top: ${({ theme }) => theme.spacing(4)};
        margin-bottom: ${({ theme }) => theme.spacing(4)};
        font-size: ${({ theme }) => theme.fonts.sizes.sMedium};
    }
`;
