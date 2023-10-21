import { cn } from '@/app/lib/cn';

type TechBadgeProps = {
  name: string;
  className?: string;
};

export const TechBadge = ({ name, className }: TechBadgeProps) => {
  return (
    <span
      className={cn(
        'rounded-lg bg-purple-900/80 px-3 py-1 text-sm text-purple-50',
        className,
      )}
    >
      {name}
    </span>
  );
};
