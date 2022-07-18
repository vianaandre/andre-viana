import { settings } from 'config/settings';
import { Button } from 'components/Button';
import { useState } from 'react';
import { CardProject } from 'components/Portfolio/CardProject';
import ProjectDesktop from 'common/assets/project-desktop.png';
import ProjectMobile from 'common/assets/project-mobile.png';
import { ContainerProjects } from './styles';

export const Projects: React.FC = () => {
  const [isCategoryActive, setIsCategoryActive] = useState<string>('all');

  return (
    <ContainerProjects>
      <ul>
        {settings.categoriesProjects.map(({ hash, title }) => (
          <a
            href={`#${hash}`}
            onClick={() => setIsCategoryActive(hash)}
          >
            <Button
              title={title}
              typeStyle={
                                isCategoryActive === hash
                                  ? 'primary'
                                  : 'outline'
                            }
            />
          </a>
        ))}
      </ul>
      <ul>
        <li>
          <CardProject
            category="web"
            href="#"
            title="Verdade Missal"
            image={ProjectDesktop}
          />
        </li>
        <li>
          <CardProject
            category="web"
            href="#"
            title="Verdade Missal"
            image={ProjectDesktop}
          />
        </li>
        <li>
          <CardProject
            category="web"
            href="#"
            title="Verdade Missal"
            image={ProjectDesktop}
          />
        </li>
        <li>
          <CardProject
            category="web"
            href="#"
            title="Verdade Missal"
            image={ProjectMobile}
          />
        </li>
      </ul>
    </ContainerProjects>
  );
};
