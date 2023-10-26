'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavItem } from './NavItem';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { LoaderIcon } from 'react-hot-toast';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
];

export const Header = () => {
  return (
    <motion.header
      className='absolute top-0 z-10 flex h-24 w-full items-center justify-center'
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container flex items-center justify-between'>
        <Link href={'/'}>
          <Suspense fallback={<LoaderIcon />}>
            <Image
              width={58}
              height={49}
              src={'/images/logo.png'}
              alt='Logo Gabriel Nogueira Dev'
              className='rounded-full duration-500 hover:shadow-regular'
            />
          </Suspense>
        </Link>
        <nav className='flex items-center gap-4 sm:gap-10'>
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
