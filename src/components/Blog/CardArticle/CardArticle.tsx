import Image from 'next/image';
import Link from 'next/link';
import { ContainerCardArticle } from './styles';
import { ICardArticle } from './interface';

export const CardArticle: React.FC<ICardArticle> = ({
  description, thumbnail, link, title,
}) => {
  return (
    <li>
      <Link href={link}>
        <ContainerCardArticle>
          <div className="thumbnail">
            <Image src={thumbnail} alt={title} placeholder="blur" blurDataURL={thumbnail} width={435} height={290} />
          </div>
          <div className="body">
            <strong>{title}</strong>
            <p>{description}</p>
            <div className="more-view">
              <span>Continuar a leitura...</span>
            </div>
          </div>
        </ContainerCardArticle>
      </Link>
    </li>
  );
};
