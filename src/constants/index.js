import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  coverhunt,
  flutter,
  firebase,
  capsNepal,
  fitbit,
  secondWays,
  mirror,
  menFashion,
  fitMob,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Mobile Application',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Django and Front-End Developer',
    company_name: 'Softwarica College',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'July 25, 2022',
  },
  {
    title: 'Node Backend',
    company_name: 'Softwarica College',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 16, 2023',
  },
  {
    title: 'MERN Stack Project and Mobile Application',
    company_name: 'Softwarica College',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'August 10, 2023',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Braintip AI',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'October 1, 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Caps Nepal',
    description: 'A e-commerce application that represent custom made caps made using Django, HTML, CSS, JS.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: capsNepal,
    repo: 'https://github.com/Inish-Bashyal/CAPSNEPAL-REAL-.git',
  },
  {
    id: 'project-2',
    name: 'FitBit',
    description:
      'A fitness tracker web app that displays your fitness routine with all CRUD operations made using MERN Stack',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: fitbit,
    repo: 'https://github.com/Inish-Bashyal/FitBit_WEB.git',
  },
  {
    id: 'project-3',
    name: 'Second Ways',
    description: 'A second hand mobile app made using Flutter and Firebase where user can buy and sell their goods along with chatting facility',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: secondWays,
    repo: 'https://github.com/Inish-Bashyal/second_ways.git',
  },
  {
    id: 'project-4',
    name: 'Handmade Crafts',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: mirror,
    repo: 'https://github.com/Inish-Bashyal/handmadeCrafts.git',
  },
  {
    id: 'project-5',
    name: 'Mens Fashionwear',
    description:
      'This is a mens ecommerce site made from MERN stack with stripe payment integration',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: menFashion,
    repo: 'https://github.com/Inish-Bashyal/MirrorMensE-Com.git',
  },
  {
    id: 'project-6',
    name: 'FitBit App',
    description:
      'This is the mobile application of FitBit made using Flutter',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: fitMob,
    repo: 'https://github.com/Inish-Bashyal/FitBit-Mobile.git',
  },
];

export { services, technologies, experiences, projects };
