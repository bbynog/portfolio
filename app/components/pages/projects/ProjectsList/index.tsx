import { ProjectCard } from './ProjectCard';
import PROJECTS from '@/app/constants/PROJECTS';

export const ProjectsList = () => {
  return (
    <section className='container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]'>
      {PROJECTS.map((project, index) => (
        <ProjectCard {...project} key={`project-list-${index}`} />
      ))}
    </section>
  );
};
