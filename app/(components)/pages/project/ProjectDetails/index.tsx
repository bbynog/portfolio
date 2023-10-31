'use client';

import { Button } from '@/app/(components)/Button';
import { SectionTitle } from '@/app/(components)/SectionTitle';
import { TechBadge } from '@/app/(components)/TechBadge';
import { TbBrandGit } from 'react-icons/tb';
import { FiGlobe } from 'react-icons/fi';
import { Link } from '@/app/(components)/Link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { cn } from '@/app/(lib)/cn';
import { scrollToElement } from '@/app/(lib)/scrollToElement';
import { motion } from 'framer-motion';
import { fadeUpAnimation, techBadgeAnimation } from '@/app/(lib)/animations';

type ProjectDetailsProps = {
  title: string;
  description: string;
  techStack: string[];
  repositoryUrl?: string;
  productionUrl: string;
};

export const ProjectDetails = ({
  title,
  description,
  techStack,
  repositoryUrl,
  productionUrl,
}: ProjectDetailsProps) => {
  return (
    <section className='relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24'>
      <div
        className='absolute inset-0 z-[-1]'
        style={{
          background: 'url(/images/hero-bg.png) no-repeat center/cover',
        }}
      />
      <SectionTitle subtitle='projects' title={title} />
      <motion.div {...fadeUpAnimation}>
        <p className='max-w-[640px] py-4 text-center text-sm text-gray-400 sm:text-base'>
          {description}
        </p>
      </motion.div>

      <div className='flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2'>
        {techStack?.map((tech, index) => (
          <TechBadge
            name={tech}
            key={`tech-project-${title}-${tech}-${index}`}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        className='flex flex-col items-center gap-2 py-6 sm:flex-row sm:gap-4 sm:py-12'
        {...fadeUpAnimation}
      >
        <a href={repositoryUrl} target={repositoryUrl && '_blank'}>
          <Button
            className={cn(
              'w-[160px] max-w-[180px]',
              !repositoryUrl && 'opacity-70',
            )}
            onClick={() => !repositoryUrl && scrollToElement('#contact')}
          >
            <TbBrandGit size={20} /> Repository
          </Button>
        </a>
        <a href={productionUrl} target='_blank'>
          <Button className='w-[160px] max-w-[180px]'>
            <FiGlobe size={20} /> Live App
          </Button>
        </a>
      </motion.div>
      <Link href={'/projects'}>
        <HiArrowNarrowLeft size={20} /> Back to projects
      </Link>
    </section>
  );
};
