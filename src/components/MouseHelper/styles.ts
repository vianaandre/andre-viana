import styled from 'styled-components';

export const ContainerMouseHelper = styled.div`
    position: fixed;
    bottom: ${({ theme }) => theme.spacing(2)};
    left: calc(
        ${({ theme }) => theme.spacing(31.25)} -
            (${({ theme }) => theme.spacing(6)} / 2)
    );

    width: ${({ theme }) => theme.spacing(6)};
    height: 73px;
    border-radius: ${({ theme }) => theme.spacing(2.5)};

    background-color: ${({ theme }) => theme.colors.primary_dark};

    display: flex;
    align-items: center;
    justify-content: center;

    div.container {
        width: 70%;
        height: 80%;

        border-radius: 20px;
        border: 3px solid;
        border-color: ${({ theme }) => theme.colors.primary};
        position: relative;

        div {
            position: absolute;
            top: 4px;
            left: calc(50% - 3px);

            animation: AnimtionCircleMouseHelper 1200ms infinite;

            width: 6px;
            height: 6px;

            border-radius: 50%;

            background-color: ${({ theme }) => theme.colors.primary};
        }
    }

    @keyframes AnimtionCircleMouseHelper {
        from {
            opacity: 1;
            top: 6px;
        }
        to {
            opacity: 0.1;
            top: 37px;
        }
    }
`;
