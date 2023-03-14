import styled from 'styled-components';

export const ContainerContact = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};
    margin-bottom: ${({ theme }) => theme.spacing(12.75)};
    h2.title {
        background: linear-gradient(180deg, #5F49E3 0%, #8AFF80 151.09%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-bottom: ${({ theme }) => theme.spacing(4)};
    }
    div.content {
        display: flex;
        flex-direction: column;
        p {
            font-size: ${({ theme }) => theme.fonts.sizes[16]};
            font-weight: ${({ theme }) => theme.fonts.weight.regular};
            font-style: normal;
            color: ${({ theme }) => theme.colors.grey.dark};
            strong {
                font-weight: ${({ theme }) => theme.fonts.weight.bold};
                color: ${({ theme }) => theme.colors.primary.dark}
            }
        }
    }
`;
