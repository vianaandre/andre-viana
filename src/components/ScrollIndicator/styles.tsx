import styled from 'styled-components';

export const ContainerScrollIndicator = styled.div`
    height: 300px;
    background: transparent;
    position: fixed;
    right: calc((100vw - ${({ theme }) => theme.breakpoints.desktop}) / 2);
    top: calc(50% - 150px);

    div.progress_bar {
        width: 3px !important;
        background: ${({ theme }) => theme.colors.purble.main};
        position: absolute;
        height: 0%;
        top: 0px;
        left: -1px;
    }
    div.line_base {
        height: 100%;
        width: 1px;
        background-color: ${({ theme }) => theme.colors.purble.main};
    }
`;
