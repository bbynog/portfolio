'use client';

import { Link } from '@/app/components/Link';
import { TechBadge } from '@/app/components/TechBadge';
import { scrollToElement } from '@/app/lib/scrollToElement';
import Image from 'next/image';
import { HiArrowNarrowRight, HiOutlineExternalLink } from 'react-icons/hi';

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imageSrc: string;
  productionUrl?: string;
  codeAvailable: boolean;
};

export const ProjectCard = ({
  title,
  description,
  techStack,
  url,
  imageSrc,
  productionUrl,
  codeAvailable,
}: ProjectCardProps) => {
  return (
    <div className='flex flex-col gap-6 pt-8 lg:flex-row lg:gap-12'>
      <div className='h-[300px] w-full max-w-[420px] overflow-hidden rounded-lg lg:min-h-[200px]'>
        <Image
          width={420}
          height={304}
          src={imageSrc}
          alt='PowerGestor Logo'
          className='bg-color-gray-400 h-full w-full object-cover transition-transform duration-500 hover:scale-110'
        />
      </div>
      <div>
        <Link
          href={url}
          className='flex items-center gap-3 text-lg font-medium text-gray-50'
        >
          <HiArrowNarrowRight width={20} height={20} color='#a855f7' />
          {title}
        </Link>

        <p className='py-6 text-gray-400'>{description}</p>
        <div className='flex flex-wrap gap-x-2 gap-y-3 pb-8 lg:max-w-[350px]'>
          {techStack.map((tech, index) => (
            <TechBadge name={tech} key={`tech-badge-${index}`} />
          ))}
        </div>

        {productionUrl && (
          <a href={productionUrl} target={productionUrl}>
            <button className='flex items-center text-center text-sm text-gray-300 transition-colors hover:text-purple-500'>
              Live App
              <div className='pl-1'>
                <HiOutlineExternalLink size={16} />
              </div>
            </button>
          </a>
        )}

        <Link href={url} className='text-md pt-1'>
          About the project
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
