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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat esse quod libero odit quo rerum perferendis! Corporis,aspernatur at veritatis',
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat esse quod libero odit quo rerum perferendis! Corporis,aspernatur at veritatis',
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
        <ProjectCard {...STARRED_PROJECTS_MOCK[0]} />
        <HorizontalDivider />
        <ProjectCard {...STARRED_PROJECTS_MOCK[1]} />

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
