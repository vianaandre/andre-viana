import Image from 'next/image';
import { ContainerCardProject } from './styles';

import { ICardProject } from './interface';

export const CardProject: React.FC<ICardProject> = ({
  title,
  category,
  image,
  href,
}) => {
  return (
    <ContainerCardProject href={href}>
      <Image alt={title} src={image} placeholder="blur" />
      <div className="hover">
        <strong>{title}</strong>
        <div>
          <div />
          <span>{category}</span>
        </div>
      </div>
    </ContainerCardProject>
  );
};
