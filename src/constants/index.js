import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  styledComponents,
  tailwind,
  sass,
  bootstrap,
  materialUi,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fdte,
  stoom,
  carrent,
  uba,
  populationData,
  fecierj,
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
    name: "Styled Components",
    icon: styledComponents,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Material UI",
    icon: materialUi,
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
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
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
      "Sistema open source FlowBuild desenvolvido pela FDTE com as tecnologias ReactJS, Redux/Redux-Toolkit, Typescript, Material UI, Lodash, MQTT, Notistack,  BPMN, Json Editor.",
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
      "Cliente no ramo de e-commerce - Plataforma de vendas B2B desenvolvido com ReactJs, Mobx, Bootstrap, Styled Components.",
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
    name: "Ubá Móveis",
    description:
      "Site viteine da loja Ubá Móveis com seus endereços de filiais e exposição de produtos. O site parou de receber atualizações do cliente.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "adonisJs",
        color: "green-text-gradient",
      },
      {
        name: "styledComponents",
        color: "pink-text-gradient",
      },
    ],
    image: uba,
    source_code_link: "http://ubamoveis.com.br/",
  },
  {
    name: "Population Data",
    description:
      "Population Data é um projeto pessoal que desenvolvi para estudar e aprender mais sobre  geolocalização em mapas e explorar gráficos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "apexcharts",
        color: "green-text-gradient",
      },
      {
        name: "leaflet",
        color: "pink-text-gradient",
      },
      // {
      //   name: "styledComponents",
      //   color: "blue-text-gradient",
      // },
    ],
    image: populationData,
    source_code_link: "https://github.com/DayanMonteiro/population-data",
  },
  {
    name: "FECIERJ",
    description:
      "Atuei como freelancer no app da FECIERJ (Federação de Ciclismo do Estado do Rio de Janeiro). Aplicativo esta disponível na playstore. ",
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
    image: fecierj,
    source_code_link:
      "https://github.com/monkey-lab/react-native-partiu-pedal/tree/bab030d8019fda1e14e4c396d3ea83b30794af37",
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
