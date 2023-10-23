import Link from 'next/link';
import { ProjectCard } from './ProjectCard';

interface Projects {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imageSrc: string;
  imageAlt: string;
  imageStyles?: string;
}

const PROJECTS_MOCK: Projects[] = [
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
      'Build using React Native. PowerApp was the first project that I got my hands on when working at TrueSoft. It surely thought me a lot about mobile applications, React Native and deployment on the stores.',
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
      'Build using React and Capacitor. PowerBonus is a client-company fidelity program system. It was a system designed and mostly developed by me.',
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

export const ProjectsList = () => {
  return (
    <section className='container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]'>
      {PROJECTS_MOCK.map((project, index) => (
        <ProjectCard {...project} />
      ))}
    </section>
  );
};
