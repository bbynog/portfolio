export interface Project {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imageSrc: string;
  imageAlt: string;
  isStarred?: boolean;
  imageStyles?: string;
  productionUrl: string;
  screenshots?: { title: string; image: string }[];
}

const PROJECTS: Project[] = [
  {
    title: 'PowerGestor',
    description:
      'ERP System. Built using AngularJS and React. Powergestor sure was a challenge. The whole system is huge and complex, but it was a great experience. It has a desktop(using electron), mobile(using cordova/capacitor) and web versions.',
    techStack: [
      'React',
      'TypeScript',
      'AngularJS',
      'JavaScript',
      'AWS',
      'Electron',
      'APIs',
    ],
    url: '/projects/powergestor',
    imageSrc: '/images/powergestor/powergestor-logo.png',
    imageAlt: 'PowerGestor Logo',
    isStarred: true,
    productionUrl: 'https://app.powergestor.com/',
    screenshots: [
      {
        title: 'Login',
        image: '/images/powergestor/powergestor-login.png',
      },
      {
        title: 'Home',
        image: '/images/powergestor/powergestor-home.png',
      },
      {
        title: 'Finance Module',
        image: '/images/powergestor/powergestor-financ.png',
      },
    ],
  },
  {
    title: 'PowerApp',
    description:
      'POS App. Built using React Native. PowerApp was the first project that I got my hands on when working at TrueSoft. It surely thought me a lot about mobile applications, React Native and deployment on the stores.',
    techStack: [
      'React Native',
      'TypeScript',
      'React-Query',
      'Redux',
      'StyledComponents',
      'APIs',
    ],
    url: '/projects/powerapp',
    imageSrc: '/images/powerapp/powerapp-logo.png',
    imageAlt: 'PowerApp Logo',
    isStarred: true,
    productionUrl:
      'https://play.google.com/store/apps/details?id=com.powergestor.rnative',
  },
  {
    title: 'PowerBonus',
    description:
      'Built using React and Capacitor. PowerBonus is a client-company fidelity program system. It was a system designed and mostly developed by me.',
    techStack: [
      'React',
      'TypeScript',
      'React-Query',
      'Redux',
      'StyledComponents',
      'APIs',
    ],
    url: '/projects/powerbonus',
    imageSrc: '/images/powerbonus/powerbonus-logo.ico',
    imageAlt: 'PowerApp Logo',
    imageStyles: 'object-contain bg-white',
    productionUrl: 'https://app.powergestor.com/loyalty/',
    isStarred: false,
  },
];

export default PROJECTS;
