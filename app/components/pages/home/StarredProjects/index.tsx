import { HorizontalDivider } from '@/app/components/HorizontalDivider';
import { SectionTitle } from '@/app/components/SectionTitle';
import { ProjectCard } from './ProjectCard';
import { Link } from '@/app/components/Link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import PROJECTS from '@/app/constants/PROJECTS';
import { Fragment } from 'react';

interface StarredProjects {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imageSrc: string;
  projectLink: string;
}
export const StarredProjects = () => {
  return (
    <section className='container pt-4 lg:pt-6'>
      <SectionTitle title='Starred Projects' subtitle='highlights' />
      <div>
        {PROJECTS.map((starredProject, index) => {
          if (!starredProject.isStarred) return null;
          if (index === PROJECTS.length - 1) {
            return (
              <ProjectCard
                {...starredProject}
                key={`starredprojects-${index}`}
              />
            );
          }

          return (
            <Fragment key={`starredprojects-${index}`}>
              <ProjectCard {...starredProject} />
              <HorizontalDivider />
            </Fragment>
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
