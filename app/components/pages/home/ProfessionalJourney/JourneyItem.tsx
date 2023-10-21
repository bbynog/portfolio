import { TechBadge } from '@/app/components/TechBadge';
import Image from 'next/image';

type JourneyItemProps = {};

export const JourneyItem = () => {
  return (
    <div className='grid grid-cols-[40px,1fr] gap-4 md:gap-10'>
      <div className='flex flex-col items-center gap-4'>
        <div className='rounded-full border border-gray-500'>
          <Image
            width={40}
            height={40}
            className='h-[40px] w-[40px] rounded-full bg-white object-contain px-0.5 pb-1'
            src={'/images/powergestor-mini-logo.png'}
            alt='pg Logo'
          />
        </div>
        <div className='h-full w-[1px] bg-gray-800'></div>
      </div>

      <div>
        <div className='flex flex-col gap-2 text-sm sm:text-base'>
          <a
            href='https://www.truesoft.com.br/'
            target='_blank'
            className='font-mono text-gray-500 transition-colors hover:text-purple-500'
          >
            @ TrueSoft
          </a>

          <h4 className='text-gray-300'>Front-end and Mobile Developer</h4>
          <span className='text-gray-500'>out 2022 • Moment (6 meses)</span>
          <p className='text-gray-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            vitae culpa itaque eum ad voluptatum dignissimos recusandae facere
            eius iusto.
          </p>

          <p className='pb-3 pt-3 text-sm font-semibold text-gray-400'>
            Skills
          </p>
          <div className='flex flex-wrap gap-x-2 gap-y-3  pb-8 lg:max-w-[350px]'>
            <TechBadge name='React' />
            <TechBadge name='React' />
            <TechBadge name='React' />
            <TechBadge name='React' />
            <TechBadge name='React' />
            <TechBadge name='React' />
          </div>
        </div>
      </div>
    </div>
  );
};
