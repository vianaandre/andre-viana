import { TitlePage } from 'components/TitlePage';
import { ContainerHeader } from './styles';

export const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <TitlePage
        title="Portfólio"
        breadcrumb={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Portfólio',
            href: '/portfolio',
          },
        ]}
      />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy
        text ever since the 1500s
      </p>
    </ContainerHeader>
  );
};
