import styled from 'styled-components';

export const ContainerTags = styled.div`
    position: absolute;
    top: 16px;
    left: ${({ theme }) => theme.spacing(18.625)};

    ul {
        display: flex;
        gap: ${({ theme }) => theme.spacing(2)};
        li {
            a {
                font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
                line-height: 200%;
                color: ${({ theme }) => theme.colors.shape};
                font-weight: medium;
                border: 1px solid ${({ theme }) => theme.colors.primary};
                border-radius: 2px;
                padding: 2px 10px;
            }
        }
    }
`;
