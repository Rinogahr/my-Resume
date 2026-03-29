import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { PortfolioData } from '../types/portfolio';
import profileImage from '../img/photo2.png';

export const portfolioData: PortfolioData = {
  name: 'Rodrigo Maciel',
  role: `Desenvolvedor Full Stack | Web & Mobile Recife - PE | (81) 99860-0486 \n rodrigopedro.m@gmail.com`,
  summary:
    'Desenvolvedor focado em criar interfaces modernas, acessíveis e responsivas com atenção a performance e experiência do usuário.',
  profileImage,
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rodrigo-maciel-003b11184',
      icon: FaLinkedinIn,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Rinogahr',
      icon: FaGithub,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/maciel__r?igsh=MWMxYW84eTlqZ3A5aQ%3D%3D&utm_source=qr',
      icon: FaInstagram,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1FRLHwwnMZ/?mibextid=wwXIfr',
      icon: FaFacebookF,
    },
  ],
  technologies: [
    {
      name: 'HTML5',
      level: 'Avançado',
      description: 'Domínio de HTML5.',
    },
    {
      name: 'CSS3',
      level: 'Avançado',
      description: 'Domínio de CSS3, design responsivo, flexbox, grid e animações.',
    },    
    {
      name: 'JavaScript',
      level: 'Avançado',
      description: 'Domínio de ES6+, manipulação de dados e integrações.',
    },    
    {
      name: 'TypeScript',
      level: 'Avançado',
      description: 'Tipagem forte para segurança e manutenção de longo prazo.',
    },
    {
      name: 'AngularJS',
      level: 'Intermediário',
      description: 'Domínio de AngularJS, manipulação de elementos, dados, diretivas, serviços, rotas e integrações.',
    },
    {
      name: 'React.js',
      level: 'Avançado',
      description: 'Construção de componentes reutilizáveis e SPAs escaláveis.',
    },
    {
      name: 'React Native',
      level: 'Intermediário',
      description: 'Construção de componentes utilização do Expo e Android Studio.',
    },
    {
      name: 'Svelte.js',
      level: 'Intermediário',
      description: 'Construção de interfaces reativos e eficientes.',
    },
    {
      name: 'Tailwind CSS',
      level: 'Intermediário',
      description: 'Estilização utilitária com foco em produtividade e consistência.',
    },
    {
      name: 'PHP (Laravel)',
      level: 'Avançado',
      description: 'Domínio de PHP, manipulação de dados e integrações com frameworks como Laravel.',
    },
    {
      name: 'Node.js',
      level: 'Avançado',
      description: 'Domínio de Node.js, manipulação de dados e integrações com frameworks como Express.',
    },
    {
      name: 'MySQL',
      level: 'Avançado',
      description: 'Domínio de MySQL, manipulação de dados e integrações com frameworks como Sequelize ou Prisma.',
    },
    {
      name: 'Oracle',
      level: 'Intermediário',
      description: 'Domínio de Oracle, manipulação de dados e consultas SQL, transações.',
    },
    {
      name: 'PostgreSQL',
      level: 'Intermediário',
      description: 'Domínio de PostgreSQL, manipulação de dados, consultas SQL e transações.',
    },
  ],
  experiences: [
    {
      role: 'Programador Full Stack',
      company: 'Assembleia de Deus IEADPE',
      period: 'Agosto/2021 – Janeiro/2026',
      highlights: [
        'Desenvolvimento e manutenção de sistemas web corporativos.',
        'Criação de APIs REST utilizando Node.js (NestJS) e PHP (Laravel).',
        'Integração com bancos Oracle, PostgreSQL e MySQL.',
        'Desenvolvimento frontend com Angular, Svelte e TypeScript.',
        'Criação de relatórios com JasperSoft.',
        'Atuação em sistemas ERP, garantindo estabilidade, integração e aderência às regras de negócio.',
        'Aoio à automação de processos e soluções Low Code',  
        `Atuei na equipe de desenvolvimento na área de Controladoria,
        realizando correções de bugs no módulo financeiro do sistema.
        Fui responsável pela criação de um método de baixa financeira
        que permitia a baixa de múltiplos lançamentos
        simultaneamente, além da implementação de baixas parciais e
        de adiantamentos. Essa solução otimizou os processos do setor
        financeiro, possibilitando a execução de várias baixas ao mesmo
        tempo e permitindo a baixa parcial de lançamentos ainda não
        autorizados para baixa integral.`,
      ],
    },
    {
      role: 'Programador Full Stack',
      company: 'NTDsoft',
      period: 'Janeiro/2015 – Agosto/2021',
      highlights: [
        'Desenvolvimento de sistemas web utilizando React.js, Node.js e PHP.',
        'Manutenção, refatoração e correção de bugs em sistemas legados.',
        'Implementação de novas funcionalidades focadas em performance e escalabilidade.',
        'Trabalho com banco de dados MySQL.',
        'Participação ativa em todo o ciclo de desenvolvimento (backend e frontend).',
      `Fui responsável pela implementação e migração do App Web  “Portal do Professor”,
      realizando a transição de PHP/HTML
      para Node.js e React.js. Atuei na criação de novas telas e no
      desenvolvimento de componentes com design moderno e
      reutilizável. As melhorias resultaram em um sistema mais
      rápido, atual, visualmente atrativo e de fácil utilização.`,
      ],
    },
  ],
  education: [
    {
      course: 'Lógica de programação com JavaScript',
      institution: 'Udemy',
      totalHours: '2',
      period: '2020',
      details: 'Estudo de lógica de programação com JavaScript, incluindo conceitos de variáveis, funções, arrays e objetos JSON.',
    },
    {
      course: 'Lógica de programação',
      institution: 'Udemy',
      totalHours: '1',
      period: '2021',
      details: 'Estudo de lógica de programação.',
    },
    {
      course: 'HTML5 e CSS3 (Flexbox e responsivo)',
      institution: 'Hora de Codar',
      totalHours: '3',
      period: '2025',
      details: 'Estudo de HTML5 e CSS3, incluindo conceitos de flexbox e responsividade.',
    },
    {
      course: 'Fundamentos de JavaScript Funcional',
      institution: 'Cod3r Cursos Online',
      totalHours: '2',
      period: '2020',
      details: 'Conseitos básicos de JavaScript funcional, como arrow functions, currying e partial application.',
    },
    {
      course: 'Fabrica de Aplicativos - React Native',
      institution: 'Sujeito Programador',
      totalHours: '32',
      period: '2024',
      details: 'Conseitos básicos de React Native, como componentes, props e estado, criando aplicativos móveis com React Native e publicando em Play Store e App Store.',
    },
    {
      course: 'Bootcmp',
      institution: 'Full Stack Club',
      totalHours: '10',
      period: '2026',
      details: `Desenvolvend projetos completo, aplicando
                práticas modernas de desenvolvimento full stack e princípios de arquitetura de software.
                No back-end. Implementando API utilizando Fastify, Node.js e TypeScript, com persistência
                de dados em PostgreSQL através do Prisma ORM e ambiente de desenvolvimento
                containerizado com Docker.
                No front-end. Implementando interface da aplicação utilizando React, Next.js e TypeScript,
                aplicando boas práticas de componentização, organização de código e desenvolvimento de
                aplicações web modernas.
                Explorou conceitos de Inteligência Artificial aplicada ao desenvolvimento, incluindo
                Prompt Engineering, orquestração de agentes e integração com Model Context Protocol (MCР).
                Utilizando essas abordagens para ampliar a produtividade no desenvolvimento de software.`
    },
    {
      course: 'NodeJs Avançado com Clean Architecture, NestJS e Typescript',
      institution: 'DevAprender',
      totalHours: '26',
      period: '2025',
      details: `Criação de API REST em NodeJs com NestJS e Typescript
                Aplicar Design Patterns em projetos NodeJs com Typescript
                Usar recursos avançados do Typescript como Interface e Generics
                Aplicar Clean Architecture e DDD em uma API criada com NestJS
                Gerar documentação de API Nodejs com NestJS e Swagger
                Criar Workflow de CI com Github Actions
                Deploy em Produção a partir de repositório do Github`,
    },
    {
      course: 'Curso SQL',
      institution: 'DevAprender',
      totalHours: '8',
      period: '2020',
      details: 'Conseitos básicos de SQL, como consultas, transações e consultas com joins.',
    },
    {
      course: 'Ensino Médio',
      institution: 'Escola Professor Jordão Emerenciano',
      period: '-',
      details: 'Completo.',
    },
  ],
  competencies: [
    {
      title: 'Comunicação',
      summary: 'Clareza na troca com time técnico e áreas de negócio.',
    },
    {
      title: 'Resolução de Problemas',
      summary: 'Capacidade analítica para encontrar soluções eficientes.',
    },
    {
      title: 'Trabalho em Equipe',
      summary: 'Colaboração ativa em ambientes ágeis e multidisciplinares.',
    },
    {
      title: 'Organização',
      summary: 'Priorização de demandas e entrega contínua com qualidade.',
    },
  ],
  habiliadadesTecncas: [
    { title: 'Git'},
    { title: 'JWT'},
    { title: 'HTML'},
    { title: 'CSS3'},
    { title: 'Expo'},
    { title: 'MySQL'},
    { title: 'Oracle'},
    { title: 'Docker'},
    { title: 'Github'},
    { title: 'Next.js'},
    { title: 'Node.js'},
    { title: 'Fastify'},
    { title: 'Swagger'},
    { title: 'React.js'},
    { title: 'AngularJS'},
    { title: 'Svelte.js'},
    { title: 'Prisma ORM'},
    { title: 'TypeScript'},
    { title: 'PostgreSQL'},
    { title: 'Angular CLI'},
    { title: 'PHP Laravel'},
    { title: 'Tailwind CSS'},
    { title: 'React Native'},
    { title: 'Testes unitários (Jest)'},
  ],
  projects: [
     {
      title: 'Tarefaz',
      stack: 'React, TypeScript, Vite',
      summary: 'Lista de Tarefas Inteligente, aplicação com gestão de tarefas e filtros avançados.',
      link: 'https://tarefaz.vercel.app',
      repositoryLink: 'https://github.com/Rinogahr/tarefaz',
    },
    {
      title: 'Portfólio Profissional',
      stack: 'React, TypeScript, Tailwind CSS',
      summary: 'Site pessoal responsivo para apresentar carreira e projetos.',
      link: 'https://my-resume-nine-opal.vercel.app/',
      repositoryLink: 'https://github.com/Rinogahr/my-Resume',
    },
    // {
    //   title: 'Painel de Métricas',
    //   stack: 'React, Recharts, API REST',
    //   summary: 'Dashboard para monitoramento de indicadores de negócio.',
    //   link: '',
    //   repositoryLink: '',
    // }   
  ],
};
