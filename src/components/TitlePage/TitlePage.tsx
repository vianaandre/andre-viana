import { Button } from 'components/Button';
import { ContainerTitlaPage } from './styles';
import { ITitlePage } from './interface';

export const TitlePage: React.FC<ITitlePage> = ({ title, breadcrumb }) => {
  return (
    <ContainerTitlaPage>
      <div>
        <h1>{title}</h1>
        <ul className="breadcrumb">
          {breadcrumb.map(({ title, href }) => (
            <li>
              <a href={href}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
      <a href={breadcrumb[breadcrumb.length - 2].href}>
        <Button title="Voltar" typeStyle="primary" />
      </a>
    </ContainerTitlaPage>
  );
};
