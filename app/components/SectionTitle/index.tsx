import { cn } from '@/app/lib/cn';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span className='font-mono text-sm text-purple-400'>
        {`../${subtitle}`}
      </span>
      <h3 className='text-3xl font-medium text-gray-200'>{title}</h3>
    </div>
  );
};
