import { TitlePage } from 'components/TitlePage';
import React from 'react';
import { Tags } from 'components/Blog/Tags';
import { ContainerHeader } from './styles';

export const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <Tags />
      <TitlePage
        breadcrumb={[
          {
            href: '/',
            title: 'Home',
          },
          {
            href: '/blog',
            title: 'Blog',
          },
        ]}
        title="Blog"
      />
    </ContainerHeader>
  );
};
