'use client';

import { TechBadge } from '@/app/(components)/TechBadge';
import { fadeUpAnimation, techBadgeAnimation } from '@/app/(lib)/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ExperienceItemProps = {
  companyName: string;
  job: string;
  description: string;
  skills: string[];
  iconSrc: string;
  iconAlt: string;
  companyWebsite: string;
  startDate: string;
};

export const ExperienceItem = ({
  companyName,
  job,
  description,
  skills,
  iconSrc,
  iconAlt,
  companyWebsite,
  startDate,
}: ExperienceItemProps) => {
  return (
    <motion.div
      className='grid grid-cols-[40px,1fr] gap-4 md:gap-10'
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col items-center gap-4'>
        <div className='rounded-full border border-gray-500'>
          <Image
            width={40}
            height={40}
            className='h-[40px] w-[40px] rounded-full bg-white object-cover'
            src={iconSrc}
            alt={iconAlt}
          />
        </div>
        <div className='h-full w-[1px] bg-gray-800'></div>
      </div>

      <div>
        <div className='flex flex-col gap-2 text-sm sm:text-base'>
          <a
            href={companyWebsite}
            target='_blank'
            className='font-mono text-gray-50 underline underline-offset-4 transition-colors lg:text-gray-200 lg:hover:text-purple-500'
          >
            @ {companyName}
          </a>
          <h4 className='font-bold text-gray-100'>{job}</h4>
          <span className='text-gray-400'>{startDate}</span>
          <p className='max-w-[400px] text-gray-200'>{description}</p>

          <p className='pb-3 pt-3 text-sm font-semibold text-gray-400'>
            Skills
          </p>
          <div className='flex max-w-[550px] flex-wrap gap-x-2 gap-y-3 pb-8'>
            {skills.map((skill, index) => (
              <TechBadge
                name={skill}
                key={`tech-badge-experience-${index}`}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
