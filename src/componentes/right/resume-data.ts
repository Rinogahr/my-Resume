export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  course: string;
  institution: string;
  period: string;
}

export interface ResumeData {
  name: string;
  title: string;
  profile: string;
  location: string;
  phone: string;
  email: string;
  skills: string[];
  languages: string[];
  experiences: WorkExperience[];
  education: EducationItem[];
}

export const resumeData: ResumeData = {
  name: 'Rodrigo Pedro Maciel',
  title: 'Desenvolvedor Web',
  profile:
    'Desenvolvedor com mais de 5 anos de experiência na indústria de gestão escolar, atuando com construção de interfaces modernas, integrações e manutenção evolutiva de sistemas.',
  location: 'Brasil',
  phone: '+55 (11) 99999-9999',
  email: 'rodrigo@example.com',
  skills: [
    'Node.js',
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Angular',
    'HTML e CSS',
    'SQL',
    'Figma',
    'Laravel'
  ],
  languages: ['Português (Nativo)', 'Inglês (Intermediário)'],
  experiences: [
    {
      role: 'Desenvolvedor Web',
      company: 'NTDSOFT',
      period: '2019 - Atual',
      highlights: [
        'Implementação de novas funcionalidades para sistemas de gestão escolar.',
        'Refatoração de interfaces para melhorar usabilidade e performance.',
        'Apoio técnico em integrações e manutenção de código legado.'
      ]
    }
  ],
  education: [
    {
      course: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Instituição de Ensino Superior',
      period: '2016 - 2018'
    }
  ]
};
