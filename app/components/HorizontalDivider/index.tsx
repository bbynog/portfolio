import { cn } from '@/app/lib/cn';

type HorizontalDividerProps = {
  className?: string;
};
export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div
      className={cn('w-full border-b border-b-gray-800 py-4', className)}
    ></div>
  );
};
