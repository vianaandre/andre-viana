import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { settings } from 'config/settings';
import { useTheme } from 'styled-components';
import { ContainerInfo } from './styles';

export const Info: React.FC = () => {
    const theme = useTheme();

    return (
        <ContainerInfo>
            <span>Olá, eu sou...</span>
            <h1>ANDRÉ VIANA</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
            </p>
            <ul>
                <li>
                    <a
                        href="https://api.whatsapp.com/send?phone=5545988378294"
                        target="black"
                    >
                        <BsWhatsapp fontSize={38} color={theme.colors.text} />
                    </a>
                </li>
                <li>
                    <a href={`mailto:${settings.info.email}`} target="black">
                        <MdEmail fontSize={38} color={theme.colors.text} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/andr%C3%A9-viana-133353190/"
                        target="black"
                    >
                        <FaLinkedin fontSize={38} color={theme.colors.text} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/andre_gust_viana/"
                        target="black"
                    >
                        <FaInstagram fontSize={38} color={theme.colors.text} />
                    </a>
                </li>
            </ul>
        </ContainerInfo>
    );
};
