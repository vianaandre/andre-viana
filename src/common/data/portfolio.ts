import { ProjectProps } from 'common/interfaces/ProjectProps';

export const projects: ProjectProps[] = [
  {
    title: '01/Tua Agenda',
    description: 'Aplcação web para agendamentos de serviços que inclui listagem das empresas, perfil da empresa, fluxo de autenticação, fluxo de agendamento com etapa de pagamento, listagem dos agendamento do cliente e formulário de anamnese.',
    technologies: 'ReactJs, NextJs, Typescript, styled-components e Radix',
    link: 'https://tua-agenda-dev.vercel.app/',
    image: 'tua-agenda.png',
    imageMobile: 'pliit-mobile.png',
    bgColor: '#F7F8FB',
  },
  {
    title: '02/Uzer Ticket',
    description: 'Aplicação para venda de ingressos que inclui uma lista organizada por categoria, autenticação de usuários, opção de compra de um ou mais ingressos, além de uma lista de ingressos comprados ou reservados para referência futura.',
    technologies: 'ReactJs, NextJs, Typescript, styled-components e Bootstrap',
    link: 'https://uzer-ticket.vercel.app/',
    image: 'uzer-ticket.png',
    imageMobile: 'uzer-ticket-mobile.png',
    bgColor: 'rgba(255, 255, 255, 0.6)',
  },
  {
    title: '03/Pliit',
    description: 'Landing Page atraente com diversos efeitos visuais para aumentar o engajamento dos usuários e tornar a experiência de navegação mais envolvente. Além disso, trabalhei meticulosamente em SEO, otimizando o conteúdo e a estrutura da página para garantir que ela apareça nos primeiros resultados dos motores de busca.',
    technologies: 'ReactJs, NextJs, Typescript e styled-components',
    link: 'https://pliit.app/',
    image: 'pliit.png',
    imageMobile: 'pliit-mobile.png',
    bgColor: '#1F2C2A',
  },
];
