import { HorizontalDivider } from '@/app/components/HorizontalDivider';
import { SectionTitle } from '@/app/components/SectionTitle';
import { ProjectCard } from './ProjectCard';
import { Link } from '@/app/components/Link';
import { HiArrowNarrowRight } from 'react-icons/hi';

interface StarredProjects {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imageSrc: string;
  projectLink: string;
}

const STARRED_PROJECTS_MOCK: StarredProjects[] = [
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
    url: '/projects/power-gestor',
    imageSrc: '/images/powergestor-logo.png',
    projectLink: 'https://app.powergestor.com/',
  },
  {
    title: 'PowerApp',
    description:
      'POS System. Build using React Native. PowerApp was the first project that I got my hands on when working at TrueSoft. It surely thought me a lot about mobile applications, React Native and deployment on the stores.',
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
    projectLink:
      'https://play.google.com/store/apps/details?id=com.powergestor.rnative',
  },
];
export const StarredProjects = () => {
  return (
    <section className='container pt-4 lg:pt-6'>
      <SectionTitle title='Starred Projects' subtitle='highlights' />
      <div>
        {STARRED_PROJECTS_MOCK.map((starredProject, index) => {
          if (index === STARRED_PROJECTS_MOCK.length - 1) {
            return <ProjectCard {...starredProject} />;
          }

          return (
            <>
              <ProjectCard {...starredProject} />
              <HorizontalDivider />
            </>
          );
        })}

        <p className='flex items-center justify-center gap-1.5 pt-8 lg:pt-12'>
          <span className='text-gray-400'>Got interested?</span>
          <Link href='/projects' className='inline-flex'>
            See all
            <HiArrowNarrowRight />
          </Link>{' '}
        </p>
      </div>
    </section>
  );
};
