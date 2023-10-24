'use client';

import { cn } from '@/app/lib/cn';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
  className?: string;
};

export const TechBadge = ({ name, className, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className={cn(
        'rounded-lg bg-purple-900/80 px-3 py-1 text-sm text-purple-50',
        className,
      )}
      {...props}
    >
      {name}
    </motion.span>
  );
};
