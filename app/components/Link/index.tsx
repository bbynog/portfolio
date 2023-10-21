import { ComponentProps } from 'react';
import NextLink from 'next/link';
import { cn } from '@/app/lib/cn';

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-purple-500',
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
