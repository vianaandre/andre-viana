import React from 'react';
import { ContainerAbout, ContainerContent } from './styles';
import { Title } from '../Title';
import { Button } from '../../Button';

export const About: React.FC = () => {
  return (
    <ContainerAbout id="about">
      <Title title="Sobre Mim" />
      <ContainerContent>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries,
          but Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries,
          but
        </p>
        <p className="text-two">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled
        </p>
        <Button title="Meu Portfólio" typeStyle="outline" />
      </ContainerContent>
    </ContainerAbout>
  );
};
