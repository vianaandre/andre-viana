/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import Link from 'next/link';

import { ProjectProps } from 'common/interfaces/ProjectProps';
import { ArrowAlternative } from 'components/Icons/ArrowAlternative';
import { ContainerCardProject } from './styles';

export const CardProject: React.FC<ProjectProps> = ({
  description, link, technologies, title,
}) => {
  return (
    <ContainerCardProject>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>
        Tecnologias:
        {' '}
        {technologies}
      </span>
      <Tooltip.Provider delayDuration={100}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="link">
              <Link href={link}>
                <a href={link} target="_black">
                  Abrir Projeto
                  <ArrowAlternative />
                </a>
              </Link>
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="tooltip_footer" sideOffset={5} side="bottom">
              <p>{link}</p>
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </ContainerCardProject>
  );
};
