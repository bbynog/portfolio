import { cn } from '@/app/lib/cn';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'flex w-max items-center justify-center gap-2 rounded-lg bg-purple-700 px-4 py-3 text-gray-50 transition-all hover:bg-purple-500 disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
};
