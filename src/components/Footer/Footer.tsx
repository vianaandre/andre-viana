import { useTheme } from 'styled-components';
import { MdCopyright } from 'react-icons/md';
import { FaHandPeace } from 'react-icons/fa';
import { ContainerFooter } from './styles';

export const Footer = () => {
    const theme = useTheme();
    return (
        <ContainerFooter>
            <p>
                <MdCopyright fontSize={16} color={theme.colors.shape} />
                André Viana {new Date().getFullYear()} | Desnevolvido por Mim
                <FaHandPeace fontSize={16} color={theme.colors.shape} />
            </p>
        </ContainerFooter>
    );
};
