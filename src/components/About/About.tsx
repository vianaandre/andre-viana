import React from 'react';
import Image from 'next/image';

import { Container } from 'components/Container';
import myPhoto from 'common/assets/my-photo.png';
import Link from 'next/link';
import { LordIcon } from 'components/LordIcon';
import { theme } from 'common/styles/theme';
import { career } from 'common/data/about';
import { ScrollIndicator } from 'components/ScrollIndicator';
import { ContainerAbout } from './styles';

export const AboutLayout: React.FC = () => {
  return (
    <ContainerAbout>
      <Container>
        <ScrollIndicator />
        <div className="content">
          <h2 className="title">Sobre. Bio. Carreira</h2>
          <div className="info_about">
            <Image src={myPhoto.src} height={myPhoto.height} width={myPhoto.width} alt="Minha Foto" />
            <div className="text">
              <p>
                Olá, eu sou o
                {' '}
                <strong>André Viana</strong>
                , um engenheiro de software que iniciou sua carreira como desenvolvedor front-end em 2022.
                <br />
                <br />
                Atualmente, atuo como desenvolvedor
                {' '}
                <strong>full-stack</strong>
                {' '}
                na
                {' '}
                <strong>Medcloud</strong>
                {' '}
                e também trabalho como
                {' '}
                <strong>freelancer</strong>
                {' '}
                com foco no desenvolvimento front-end, utilizando stacks como
                {' '}
                <strong>ReactJs</strong>
                ,
                {' '}
                <strong>NextJS</strong>
                ,
                {' '}
                <strong>NodeJs</strong>
                {' '}
                e
                {' '}
                <strong>AWS</strong>
                .
                <br />
                <br />
                Nascido no Brasil e com 20 anos de idade, tenho uma grande paixão pelo desenvolvimento front-end, em especial a criação de aplicações web. Nos meus momentos de lazer, costumo assistir filmes e séries.
              </p>
              <Link href="#">
                <a>
                  Download CV
                  <LordIcon
                    src="/static/lordIcon/article.json"
                    delay={200}
                    trigger="hover"
                    colors={{
                      primary: theme.colors.primary.dark,
                      secondary: theme.colors.primary.dark,
                    }}
                    size={24}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="bio">
            <h4 className="title">Bio</h4>
            <blockquote>
              Zeno Rocha is a Brazilian creator and programmer. He currently lives in San Francisco, California, where hes the Founder CEO at Resend. His lifelong appreciation for building software and sharing knowledge led him to speak in over.
            </blockquote>
            {/* <button type="button">
              Copiar
              <LordIcon
                src="/static/lordIcon/copy.json"
                delay={200}
                trigger="hover"
                colors={{
                  primary: theme.colors.primary.dark,
                  secondary: theme.colors.primary.dark,
                }}
                size={56}
              />
            </button> */}
          </div>
          <div className="career">
            <h4 className="title">Carreira</h4>
            <ul>
              {career.map((item) => (
                <li key={item.company.text}>
                  <h6>{item.office}</h6>
                  <p>
                    <a href={item.company.link} target="_black">{item.company.text}</a>
                    {' '}
                    •
                    {' '}
                    {item.locale}
                  </p>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </ContainerAbout>
  );
};
