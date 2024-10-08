'use client';

import { cn } from '@/app/(lib)/cn';
import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const animProps = {
  initial: {
    opacity: 0,
    x: -100,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <motion.span
        className='font-mono text-sm text-purple-400'
        {...animProps}
        transition={{ duration: 0.5 }}
      >
        {`../${subtitle}`}
      </motion.span>
      <motion.h3
        className='text-3xl font-medium text-gray-100'
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
      >
        {title}
      </motion.h3>
    </div>
  );
};
