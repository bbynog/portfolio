import { HorizontalDivider } from '@/app/components/HorizontalDivider';
import { SectionTitle } from '@/app/components/SectionTitle';
import { ProjectCard } from './ProjectCard';
import { Link } from '@/app/components/Link';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const StarredProjects = () => {
  return (
    <section className='container pt-4'>
      <SectionTitle title='Starred Projects' subtitle='highlights' />
      <div>
        <ProjectCard />
        <HorizontalDivider />
        <ProjectCard />

        <p className='flex items-center justify-center gap-1.5 pt-16'>
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
