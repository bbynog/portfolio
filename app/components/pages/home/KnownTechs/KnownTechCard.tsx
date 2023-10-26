import { getRelativeTimeString } from '@/app/lib/getRelativeTimeString';
import { ReactNode } from 'react';

type KnownTechCardProps = {
  icon: ReactNode;
  name: string;
  startDate: string;
};

export const KnownTechCard = ({
  icon,
  name,
  startDate,
}: KnownTechCardProps) => {
  const relativeTime = getRelativeTimeString(new Date(startDate), 'en').replace(
    ' ago',
    '',
  );

  return (
    <div className='flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 hover:bg-gray-600/30 hover:text-purple-400 hover:shadow-low'>
      <div className='flex items-center justify-between text-purple-400'>
        <p className='font-medium'>{name}</p>
        {icon}
      </div>
      <span>{relativeTime} of experience</span>
    </div>
  );
};
