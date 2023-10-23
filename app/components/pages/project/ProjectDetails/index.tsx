import { Button } from '@/app/components/Button';
import { SectionTitle } from '@/app/components/SectionTitle';
import { TechBadge } from '@/app/components/TechBadge';
import { TbBrandGit } from 'react-icons/tb';
import { FiGlobe } from 'react-icons/fi';
import { Link } from '@/app/components/Link';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const ProjectDetails = () => {
  return (
    <section className='relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24'>
      <div
        className='absolute inset-0 z-[-1]'
        style={{
          background: 'url(/images/hero-bg.png) no-repeat center/cover',
        }}
      />
      <SectionTitle subtitle='projects' title={'PowerGestor'} />
      <p className='max-w-[640px] py-4 text-center text-sm text-gray-400 sm:text-base'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque
        fuga quidem! Odio iste natus distinctio perspiciatis doloribus libero
        excepturi porro perferendis sed eligendi, consequatur iusto amet nam
        commodi ex modi soluta harum, laborum saepe atque nihil quos non labore.
      </p>
      <div className='flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2'>
        <TechBadge name='Next.JS' />
        <TechBadge name='Next.JS' />
        <TechBadge name='Next.JS' />
        <TechBadge name='Next.JS' />
        <TechBadge name='Next.JS' />
        <TechBadge name='Next.JS' />
        <TechBadge name='Next.JS' />
      </div>
      <div className='flex flex-col items-center gap-2 py-6 sm:flex-row sm:gap-4 sm:py-12'>
        <a href='https://github.com/'>
          <Button className='w-[160px] max-w-[180px]'>
            <TbBrandGit size={20} /> Repository
          </Button>
        </a>
        <a href='https://github.com/'>
          <Button className='w-[160px] max-w-[180px]'>
            <FiGlobe size={20} /> Live Project
          </Button>
        </a>
      </div>
      <Link href={'/projects'}>
        <HiArrowNarrowLeft size={20} /> Back to projects
      </Link>
    </section>
  );
};
