/* eslint-disable indent */
import { ProjectProps } from 'common/interfaces/ProjectProps';

export const projects: ProjectProps[] = [
    {
        title: 'Pagou.ai',
        description: 'Aplicação focada em checkouts de pagamento otimizados para conversão, com suporte a múltiplos temas, upsell com 1 clique, rastreamento de vendas (tracking) e diversas outras funcionalidades essenciais para um checkout moderno e eficiente.',
        technologies: 'React.js, Next.js, Tailwind, TanStack, ShadCN UI, Jest e Cypress.',
        links: ['https://pagou.ai/'],
        type: 'Aplicação web',
    },
    {
        title: 'RIS Medcloud',
        description: 'Sistema de gestão administrativa e agendamento de consultas voltado para clínicas médicas, com funcionalidades como agendamento online, automação de faturamento via TISS/TUSS, além de gerenciamento de convênios e parceiros de forma centralizada e eficiente.',
        technologies: 'React.js, Typescript, Redux, Material-UI, AWS Lambda, AWS Appsync, AWS S3, AWS SES, AWS Cognito, AWS DynamoDB, AWS RDS, MySQL, Node.js, GraphQL, Serverless Framework, Jest, Cypress.',
        links: ['https://ris.medcloud.co/'],
        type: 'Aplicação web',
    },
    {
        title: 'Pliit APP',
        description: 'Landing page moderna, intuitiva e focada em conversão, com layout responsivo e visual atrativo, projetada para engajar visitantes, comunicar os diferenciais da plataforma e capturar leads com eficiência.',
        technologies: 'React.js, Next.js, Typescript, Styled-components.',
        links: [
            'https://pliit.app/',
        ],
        type: 'Landing page',
    },
    {
        title: 'EventFy',
        description: 'Plataforma focada na gestão de eventos, com funcionalidades como gerenciamento completo de eventos, informações detalhadas sobre o local, agendamento de ingressos, canal direto com a equipe organizadora e um sistema moderno de credenciamento para eventos presenciais.',
        technologies: 'HTML, Tailwind, JavaScript.',
        links: [
            'https://play.eventfy.com.br/',
            'https://app.eventfy.com.br/',
            'https://rsvp.eventfy.com.br/',
        ],
        type: 'Landing page/Aplicação web',
    },
    {
        title: 'MaisControl',
        description: 'Controle e gestão de combustível para Transportadoras e Fazendas.',
        technologies: 'React Native, Expo, AsyncStorage, Typescript.',
        links: [
            'https://apps.apple.com/br/app/maiscontrol/id6446258078',
        ],
        type: 'Aplicativo',
    },
    {
        title: 'Codemenu',
        description: 'Sistema de gestão para restaurantes, com funcionalidades como controle de produtos, menu digital, vendas online, criação de campanhas promocionais e gerenciamento completo de cardápios — tudo em uma única plataforma.',
        technologies: 'Typescript, React.js, Styled-components, Bootstrap, PHP, Laravel, MySQL.',
        links: ['https://codemenu.com.br/'],
        type: 'Aplicação web',
    },
];
