import { Link } from '@/app/components/Link';
import { TechBadge } from '@/app/components/TechBadge';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const ProjectCard = () => {
  return (
    <div className='flex flex-col gap-6 pt-8 lg:flex-row lg:gap-12'>
      <div className='h-full w-full'>
        <Image
          width={420}
          height={304}
          src='/images/powergestor-logo.png'
          alt='PowerGestor Logo'
          className='bg-color-gray-400 h-[200px] max-w-[420] rounded-lg object-cover sm:h-[300px] lg:min-h-full '
        />
      </div>
      <div>
        <h3 className='flex items-center gap-3 text-lg font-medium text-gray-50'>
          <HiArrowNarrowRight width={20} height={20} color='#a855f7' />
          PowerGestor
        </h3>
        <p className='py-6 text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellat esse quod libero odit quo rerum perferendis! Corporis,
          aspernatur at veritatis
        </p>
        <div className='flex flex-wrap gap-x-2 gap-y-3 pb-8 lg:max-w-[350px]'>
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
        </div>

        <Link href='/projects/power-gestor'>
          Check it out!
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
