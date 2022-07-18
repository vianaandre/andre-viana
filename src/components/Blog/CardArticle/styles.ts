import styled from 'styled-components';

export const ContainerCardArticle = styled.div`
    max-width: 500px;
    min-width: 320px;
    width: 100%;
    padding: ${({ theme }) => theme.spacing(4)};
    background-color: #1442B880;
    border-radius: 4px;
    cursor: pointer;

    div.body {
        margin-top: ${({ theme }) => theme.spacing(2)};
        strong {
            font-size: ${({ theme }) => theme.fonts.sizes.sMedium};
            color: ${({ theme }) => theme.colors.shape};
            font-weight: 600;
        }
        p {
            font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
            color: ${({ theme }) => theme.colors.shape};
            margin-top: ${({ theme }) => theme.spacing(2)};
            font-weight: 500;
            color: ${({ theme }) => theme.colors.gray_200};
        }
        div.more-view {
            width: 100%;
            text-align: center;
            margin-top: ${({ theme }) => theme.spacing(3)};

            span {
                font-size: ${({ theme }) => theme.fonts.sizes.xMedium};
                color: ${({ theme }) => theme.colors.shape};
                font-weight: 600;
            }
        }
    }
`;
