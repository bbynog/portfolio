import Image from 'next/image';

export const ProjectCard = () => {
  return (
    <div className='group flex h-[436px] flex-col overflow-hidden rounded-lg bg-gray-800 opacity-70 shadow-low ring-purple-700 transition-all duration-500 hover:opacity-100 hover:shadow-regular hover:ring-2'>
      <div className='h-48 w-full overflow-hidden'>
        <Image
          src={'/images/powergestor-logo.png'}
          width={380}
          height={200}
          alt={'PowerGestor Logo Thumbnail'}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
          unoptimized
        />
      </div>

      <div className='flex flex-1 flex-col p-8'>
        <strong className='font-medium text-gray-50/90 transition-colors duration-500 group-hover:text-purple-500'>
          PowerGestor
        </strong>
        <p className='line-clamp-4 pt-2 text-gray-400'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          dolores, atque nam reiciendis necessitatibus itaque voluptatem nostrum
          eligendi culpa aliquam?
        </p>
        <span className='mt-auto block truncate text-sm font-medium text-gray-300'>
          Next.js, Tailwind, TypeScript, Prisma, FramerMotion, React-Querys
        </span>
      </div>
    </div>
  );
};
