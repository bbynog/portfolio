'use client';

import { fadeUpAnimation } from '@/app/(lib)/animations';
import { cn } from '@/app/(lib)/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Suspense } from 'react';
import { LoaderIcon } from 'react-hot-toast';

type ProjectSectionProps = {
  title: string;
  image: string;
  isMobile?: boolean;
};

export const ProjectSection = ({
  title,
  image,
  isMobile,
}: ProjectSectionProps) => {
  return (
    <section className='container flex flex-col gap-8 py-8 md:gap-32 md:py-16'>
      <motion.div
        className='flex flex-col items-center gap-6 md:gap-12'
        {...fadeUpAnimation}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-2xl font-medium text-gray-300 md:text-3xl'>
          {title}
        </h2>
        <Suspense fallback={<LoaderIcon />}>
          <Image
            src={image}
            width={isMobile ? 400 : 1080}
            height={672}
            className={cn('aspect-auto rounded-lg object-cover')}
            alt={'Case Section ' + title}
          />
        </Suspense>
      </motion.div>
    </section>
  );
};
