'use client';

import { Link } from '@/app/(components)/Link';
import { SectionTitle } from '@/app/(components)/SectionTitle';
import { motion } from 'framer-motion';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const PageIntroduction = () => {
  return (
    <section className='flex h-[450px] w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat px-2 lg:h-[630px]'>
      <SectionTitle
        subtitle='projects'
        title='My Projects'
        className='items-center text-center [&>h3]:text-4xl'
      />
      <motion.div
        className='flex flex-col items-center'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className='max-w-[640px] py-6 text-center text-sm text-gray-400 sm:text-base'>
          Here are some projects that I have worked on. Some of them I've built
          from scratch and some I have contributed to.
        </p>
        <Link href={'/'}>
          <HiArrowNarrowLeft /> Back to home
        </Link>
      </motion.div>
    </section>
  );
};
