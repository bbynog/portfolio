import { cn } from '@/app/lib/cn';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imageSrc: string;
  imageAlt: string;
  imageStyles?: string;
};

export const ProjectCard = ({
  title,
  description,
  techStack,
  url,
  imageSrc,
  imageAlt,
  imageStyles,
}: ProjectCardProps) => {
  return (
    <Link href={url}>
      <div className='group flex h-[436px] flex-col overflow-hidden rounded-lg bg-gray-800 opacity-70 shadow-low ring-purple-700 transition-all duration-500 hover:opacity-100 hover:shadow-regular hover:ring-2'>
        <div className='h-48 w-full overflow-hidden'>
          <Image
            src={imageSrc}
            width={380}
            height={200}
            alt={imageAlt}
            className={cn(
              'h-full w-full object-cover transition-transform duration-500 group-hover:scale-110',
              imageStyles,
            )}
            unoptimized
          />
        </div>

        <div className='flex flex-1 flex-col p-8'>
          <strong className='font-medium text-gray-50/90 transition-colors duration-500 group-hover:text-purple-500'>
            {title}
          </strong>
          <p className='line-clamp-4 pt-2 text-gray-400'>{description}</p>
          <span className='mt-auto block truncate text-sm font-medium text-gray-300'>
            {techStack.map((techStack, index) => {
              if (index === techStack.length - 1) return techStack;
              return techStack + ', ';
            })}
          </span>
        </div>
      </div>
    </Link>
  );
};
