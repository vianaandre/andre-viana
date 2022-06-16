import styled from 'styled-components';

export const ContainerTitle = styled.h2`
    font-size: ${({ theme }) => theme.fonts.sizes.heading02};
    font-family: ${({ theme }) => theme.fonts.styles.title};
    font-weight: 700;
    line-height: ${({ theme }) => theme.fonts.height.large};
    color: ${({ theme }) => theme.colors.title};
`;
