import styled from 'styled-components';

export const ContainerMy = styled.div`
    border: 5px solid ${({ theme }) => theme.colors.shape};

    position: fixed;
    top: ${({ theme }) => theme.spacing(6)};
    right: ${({ theme }) => theme.spacing(6)};

    border-radius: 50%;
    box-sizing: border-box;

    width: 88px;
    height: 88px;

    box-shadow: 0 5px 15px 0 rgba(0 0 0 0, 50%);

    overflow: hidden;

    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    animation: AnimationMyPhoto 6s ease-in-out infinite;

    z-index: ${({ theme }) => theme.zIndex.menu};

    @keyframes AnimationMyPhoto {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
            transform: translatey(0px);
        }
        50% {
            box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
            transform: translatey(-20px);
        }
        100% {
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
            transform: translatey(0px);
        }
    }
`;
