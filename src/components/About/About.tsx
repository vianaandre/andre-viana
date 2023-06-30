import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import Lottie from 'lottie-react';

import { Container } from 'components/Container';
import myPhoto from 'common/assets/my-photo.png';
import Link from 'next/link';
import { career } from 'common/data/about';
import article from 'common/assets/lordIcon/about.json';
import { ContainerAbout } from './styles';
import { useAbout } from './useAbout';

export const AboutLayout: React.FC = () => {
  const { lottieIconArticle } = useAbout();

  return (
    <ContainerAbout>
      <Container>
        <div className="content">
          <h2 className="title">Sobre. Habilidades. Bio. Carreira.</h2>
          <div className="info_about">
            <img
              src={myPhoto.src}
              alt="Minha Foto"
            />
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
                <strong>Full-Stack/Mobile</strong>
                {' '}
                na
                {' '}
                <strong>Private Code®</strong>
                {' '}
                e também trabalho como
                {' '}
                <strong>Freelancer</strong>
                {' '}
                na área. Minhas habilidades incluem o uso de tecnologias como
                {' '}
                <strong>ReactJs</strong>
                ,
                {' '}
                <strong>NextJS</strong>
                ,
                {' '}
                <strong>React Native</strong>
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
                Nascido no Brasil e com 20 anos de idade, tenho uma grande paixão pelo desenvolvimento de produtos digitais. Nos meus momentos de lazer, costumo assistir filmes e séries.
              </p>
              <Link href="CV-Andre.pdf" download role="button">
                <a
                  onMouseEnter={() => lottieIconArticle?.current?.play()}
                  onMouseLeave={() => lottieIconArticle?.current?.stop()}
                  target="_blank"
                >
                  Download CV
                  <Lottie
                    lottieRef={lottieIconArticle}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    animationData={article}
                    loop={false}
                    autoplay={false}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="skills">
            <h4 className="title">Habilidades</h4>
            <p>HTML; CSS; Javascript; Typescript; ReactJs; NextJs; React Native; Styled-Components; PHP; Laravel; Bootstrap; Material-UI; NodeJs; AWS; GraphQL; Cypress; Jest; Docker; MySQL.</p>
          </div>
          <div className="bio">
            <h4 className="title">Bio</h4>
            <blockquote>
              Como desenvolvedor Full-Stack/mobile, sou especialista no desenvolvimento de aplicações web e mobile, com um foco especial em responsividade, desempenho e qualidade. Meu objetivo é sempre proporcionar a melhor experiência possível para o usuário, garantindo que as aplicações sejam visualmente atraentes, funcionais e de alto desempenho. Estou comprometido em acompanhar as melhores práticas da indústria e me manter atualizado com as mais recentes tecnologias e tendências no campo do desenvolvimento Full-Stack/mobile.
            </blockquote>
          </div>
          <div className="career">
            <h4 className="title">Carreira</h4>
            <ul>
              {career.map((item) => (
                <li key={item.company.text}>
                  <h6>{item.office}</h6>
                  <p>
                    <Tooltip.Provider delayDuration={100}>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <a href={item.company.link} target="_black">{item.company.text}</a>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content className="tooltip_footer" sideOffset={5} side="bottom">
                            <p>{item.company.link}</p>
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
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
