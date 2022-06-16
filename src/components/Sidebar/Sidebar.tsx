import React, { useState } from 'react';
import { settings } from 'config/settings';
import { ContainerSidebar, ContainerMenu, ContainerInfo } from './styles';
import { ISidebar } from './interface';

export const Sidebar: React.FC<ISidebar> = ({ data }) => {
    const [isLinkActive, setIsLinkActive] = useState<string>('');

    return (
        <ContainerSidebar>
            <ContainerMenu>
                <ul>
                    {settings.menu.map(({ link, named }) => (
                        <li
                            key={link}
                            className={isLinkActive === link ? 'isActive' : ''}
                        >
                            <a
                                href={link}
                                onClick={() => setIsLinkActive(link)}
                            >
                                <p>{named}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </ContainerMenu>
            <ContainerInfo>
                <li>
                    <h4>Nome</h4>
                    <p>{data.name}</p>
                </li>
                <li>
                    <h4>E-mail</h4>
                    <p>{data.email}</p>
                </li>
                <li>
                    <h4>Cargo</h4>
                    <p>{data.office}</p>
                </li>
            </ContainerInfo>
        </ContainerSidebar>
    );
};
