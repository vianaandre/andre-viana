import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import Lottie from 'lottie-react';

import { Container } from 'components/Container';
import myPhoto from 'common/assets/my-photo.png';
import Link from 'next/link';
import { career } from 'common/data/about';
import article from 'common/assets/lordIcon/about.json';
import { projects } from 'common/data/portfolio';
import { ContainerAbout } from './styles';
import { useAbout } from './useAbout';

export const AboutLayout: React.FC = () => {
  const { lottieIconArticle } = useAbout();

  return (
    <ContainerAbout>
      <Container>
        <div className="content">
          <div className="container_titles">
            <a className="title" href="#sobre">Sobre.</a>
            <a className="title" href="#habilidades">Habilidades.</a>
            <a className="title" href="#bio">Bio.</a>
            <a className="title" href="#carreira">Carreira.</a>
            <a className="title" href="#projetos">Projetos.</a>
          </div>
          {/* <h2 className="title">Sobre. Habilidades. Bio. Carreira. Projetos.</h2> */}
          <div className="info_about" id="sobre">
            <img
              src={myPhoto.src}
              alt="Minha Foto"
            />
            <div className="text">
              <p>
                Olá! Sou
                {' '}
                <strong>André Viana</strong>
                , engenheiro de software com mais de
                {' '}
                <strong>4 anos de experiência</strong>
                {' '}
                no desenvolvimento de aplicações web e
                {' '}
                <strong>2 anos de experiência</strong>
                {' '}
                no desenvolvimento de aplicativos.
                <br />
                <br />
                Tenho domínio de tecnologias como
                {' '}
                <strong>React.js</strong>
                ,
                {' '}
                <strong>Next.js</strong>
                ,
                {' '}
                <strong>React Native</strong>
                ,
                {' '}
                <strong>Node.js</strong>
                {' '}
                e
                {' '}
                <strong>AWS</strong>
                , e sou apaixonado por criar soluções robustas, modernas e que realmente façam diferença na rotina das pessoas.
                <br />
                <br />
                Atualmente, atuo na
                {' '}
                <strong>Pagou.ai</strong>
                ,
                {' '}
                onde contribuo para a construção de um sistema de checkout para processamento de pagamentos, focando em performance, escalabilidade e experiência do usuário.
                <br />
                <br />
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
          <div className="skills" id="habilidades">
            <h4 className="title">Habilidades</h4>
            <p>Javascript; Typescript; React.js; Next.js; React Native; TanStack; Material-UI; Tailwind; Node.js; PHP; Laravel; Bootstrap; AWS; GraphQL; Cypress; Jest; Docker; MySQL; PostgreSQL; Clean Code; TDD.</p>
          </div>
          <div className="bio" id="bio">
            <h4 className="title">Bio</h4>
            <blockquote>
              Como desenvolvedor Front-end, sou especializado na criação de aplicações web e mobile com foco em responsividade, performance e qualidade de código. Busco sempre oferecer a melhor experiência ao usuário, entregando interfaces intuitivas, atraentes e altamente funcionais. Sou comprometido com as melhores práticas da engenharia de software e estou em constante evolução, acompanhando as tendências e tecnologias mais recentes no ecossistema front-end.
            </blockquote>
          </div>
          <div className="career" id="carreira">
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
                  <p className="describe">{item.describe}</p>
                  <span className="stacks">
                    Tecnologias:
                    {' '}
                    {item.stacks}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="project" id="projetos">
            <h4 className="title">Projetos</h4>
            <ul>
              {projects.map((project) => (
                <li key={project.title}>
                  <h6>
                    {project.title}
                    {' '}
                    <b>
                      •
                      {' '}
                      {project.type}
                    </b>
                  </h6>
                  <div className="links">
                    {project.links.map((link) => (
                      <>
                        <p key={link}>
                          <Tooltip.Provider delayDuration={100}>
                            <Tooltip.Root>
                              <Tooltip.Trigger asChild>
                                <a href={link} target="_black">{link}</a>
                              </Tooltip.Trigger>
                              <Tooltip.Portal>
                                <Tooltip.Content className="tooltip_footer" sideOffset={5} side="bottom">
                                  <p>{link}</p>
                                </Tooltip.Content>
                              </Tooltip.Portal>
                            </Tooltip.Root>
                          </Tooltip.Provider>
                        </p>
                        {project.links.length > 1 && (
                          <p className="divider_point">
                            •
                          </p>
                        )}
                      </>
                    ))}
                  </div>
                  <p className="describe">{project.description}</p>
                  <span className="stacks">{project.technologies}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </ContainerAbout>
  );
};
