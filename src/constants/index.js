import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fdte,
  stoom,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalhos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const hardSkills = [
  {
    id: 1,
    description: "Git / GitHub, Bitbucket, Jira",
  },
  {
    id: 2,
    description: "HTML, CSS, Tailwind, SASS, Styled Components, Stitches.",
  },
  {
    id: 3,
    description: "Bootstrap, Evergreen UI, Material UI.",
  },
  {
    id: 4,
    description: "Javascript, TypeScript.",
  },
  {
    id: 5,
    description:
      "ReactJs, React Native, Hooks, Redux, Redux-Toolkit, Mobx-React, NextJS.",
  },
  {
    id: 6,
    description: "Flowbuild, Workflow-manager.",
  },
  {
    id: 7,
    description: "Estudando: Database: MYSQL, MariaDB.",
  },
  {
    id: 8,
    description: "Estudando: Node.js (REST APIs, GraphQL)",
  },
  {
    id: 9,
    description: "Agile Methodology: Scrum / Kanban",
  },
];

const scrum = [
  {
    id: "SFPC",
    course: "Scrum Foundation Professional Certificate (SFPC)",
  },
  {
    id: "SFC",
    course: "Scrum Fundamentals Certifield (SFC)",
  },
  {
    id: "SMPC",
    course: "Scrum Master Professional Certificate (SMPC)",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "  Estudando Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name:
      "FDTE - Fundação para o Desenvolvimento Tecnológico da Engenharia",
    icon: fdte,
    iconBg: "#383E56",
    date: "Julho 2021 - Outubro 2022",
    points: [
      "Cliente do ramo imobiliário - Site vitrine da imobiliária com NextJS, Styled Components, GeoLib.",
      "Cliente do ramo imobiliário -  Sistema backoffice para as rotinas da empresa desenvolvido com ReactJs, EvergreenUI, Redux/Redux-Toolkit, MǪTT (mensageria).",
      "Cliente do ramo imobiliário -  Desenvolvimento de 2 apps um para corretores e outro pra clientes desenvolvido com React Native, Styled Components, Redux/Redux-Toolkit, MǪTT (mensageria).",
      "Cliente no ramo de e-commerce - Site de vendas desenvildo com ReactJs, Redux, Typescript, MaterialUI, Stiches, GraphQl, NestJs.",
      "Sistema open source  da FlowBuild desenvolvido pela FDTE com as tecnologias ReactJS, Redux/Redux-Toolkit, Typescript, Material UI, Lodash, MQTT, Notistack,  BPMN, Json Editor.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "STOOM ",
    icon: stoom,
    iconBg: "#E6DEDD",
    date: "Fevereiro 2023 - Até o momento",
    points: [
      "Cliente no ramo de e-commerce - App para gerenciamento de estoque e organização através de checklists e evidencias fotográficas de setores, desenvolvido com React Native, Typescript, Styled Components.",
      "Cliente no ramo de e-commerce - Plataforma de e-commerce desenvolvida com ReactJs, NextJS, SASS, Mobx, Bootstrap.",
      "Cliente no ramo de e-commerce - Marketplace Manager desenvolvido com ReactJs, Mobx, Bootstrap, SASS.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  hardSkills,
  scrum,
};
