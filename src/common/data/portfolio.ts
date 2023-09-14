/* eslint-disable indent */
import { ProjectProps } from 'common/interfaces/ProjectProps';

export const projects: ProjectProps[] = [
    {
        title: '01/Tua Agenda',
        description: 'Aplcação web para agendamentos de serviços que inclui listagem das empresas, perfil da empresa, fluxo de autenticação, fluxo de agendamento com etapa de pagamento, listagem dos agendamento do cliente e formulário de anamnese.',
        technologies: 'ReactJs, NextJs, Typescript, styled-components e Radix',
        link: 'https://tua-agenda-dev.vercel.app/',
    },
    {
        title: '02/SynPass',
        description: 'Aplicação para venda de ingressos que inclui uma lista organizada por categoria, autenticação de usuários, opção de compra de um ou mais ingressos, além de uma lista de ingressos comprados ou reservados para referência futura.',
        technologies: 'ReactJs, NextJs, Typescript, styled-components e Bootstrap',
        link: 'https://synpass.com.br/',
    },
    {
        title: '03/EventFy Play',
        description: 'Landing Page atraente com diversos efeitos visuais para aumentar o engajamento dos usuários e tornar a experiência de navegação mais envolvente. Além disso, trabalhei meticulosamente em SEO, otimizando o conteúdo e a estrutura da página para garantir que ela apareça nos primeiros resultados dos motores de busca.',
        technologies: 'ReactJs, NextJs, Typescript e styled-components',
        link: 'https://play.eventfy.com.br/',
    },
    {
        title: '04/SICOM',
        description: 'Aplicação para gerenciar os Módulos de Balancetes Contábeis.',
        technologies: 'ReactJs, DevExtreme UI, Axios, SASS',
        link: 'https://sicom.vercel.app/',
    },
];
