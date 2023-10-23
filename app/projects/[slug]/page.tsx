import { ProjectDetails } from '@/app/components/pages/project/ProjectDetails';
import { ProjectSection } from '@/app/components/pages/project/ProjectSection';

const PROJECT_SECTIONS_MOCK = [
  {
    title: 'Login',
    image: '/images/powergestor-background.png',
  },
  {
    title: 'Home',
    image: '/images/powergestor-background.png',
  },
];

const PROJECTS_MOCK = [
  {
    title: 'PowerGestor',
    description:
      'Built using AngularJS and React. Powergestor sure was a challenge. The whole system is huge and complex, but it was a great experience. It has a desktop(using electron), mobile(using cordova/capacitor) and web versions.',
    techStack: [
      'React',
      'TypeScript',
      'AngularJS',
      'JavaScript',
      'AWS',
      'Electron',
      'APIs',
    ],
    url: '/projects/power-gestor',
    imageSrc: '/images/powergestor-logo.png',
    imageAlt: 'PowerGestor Logo',
  },
  {
    title: 'PowerApp',
    description:
      'Built using React Native. PowerApp was the first project that I got my hands on when working at TrueSoft. It surely thought me a lot about mobile applications, React Native and deployment on the stores.',
    techStack: [
      'React Native',
      'TypeScript',
      'React-Query',
      'Redux',
      'StyledComponents',
      'APIs',
    ],
    url: '/projects/power-app',
    imageSrc: '/images/powerapp-logo.png',
    imageAlt: 'PowerApp Logo',
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
    url: '/projects/power-bonus',
    imageSrc: '/images/powerbonus-logo.ico',
    imageAlt: 'PowerApp Logo',
    imageStyles: 'object-contain bg-white',
  },
];

export default function Project() {
  const powergestor = PROJECTS_MOCK[0];
  return (
    <div>
      <ProjectDetails
        title={powergestor.title}
        description={powergestor.description}
        techStack={powergestor.techStack}
        productionUrl={'https://app.powergestor.com/'}
      />
      <ProjectSection {...PROJECT_SECTIONS_MOCK[0]} />
      <ProjectSection {...PROJECT_SECTIONS_MOCK[1]} />
    </div>
  );
}
