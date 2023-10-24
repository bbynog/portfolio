'use client';

import { motion } from 'framer-motion';
import { IoMdHeart } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className='bg-gray-850 flex h-14 w-full items-center justify-center'>
      <span className='flex items-center gap-1.5 font-mono text-xs text-gray-400 sm:text-sm'>
        Made with
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.5, scale: 0.5 }}
          transition={{
            type: 'spring',
            delay: 0.1,
          }}
        >
          <IoMdHeart size={13} className='text-purple-500' />
        </motion.div>
        by
        <strong className='font-medium'>Gabriel Nogueira</strong>
      </span>
    </footer>
  );
};
