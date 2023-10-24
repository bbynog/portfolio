'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import PROJECTS from '@/app/constants/PROJECTS';
import { fadeUpAnimation } from '@/app/lib/animations';

export const ProjectsList = () => {
  return (
    <section className='container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]'>
      {PROJECTS.map((project, index) => (
        <motion.div
          key={`project-list-${index}`}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </section>
  );
};
