import React from 'react';
import Image from 'next/image';
import { Info } from 'components/Home/Info';
import BackgroundIntroHome from 'common/assets/background-intro-home.png';
import { ContainerIntro } from './styles';

export const Intro: React.FC = () => {
  return (
    <ContainerIntro id="home">
      <div className="information">
        <Info />
      </div>
      <Image
        src={BackgroundIntroHome}
        alt="Fundo"
        placeholder="blur"
        priority
      />
    </ContainerIntro>
  );
};
