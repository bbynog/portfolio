import Image from 'next/image';

type ProjectSectionProps = {
  title: string;
  image: string;
};

export const ProjectSection = ({ title, image }: ProjectSectionProps) => {
  return (
    <section className='container flex flex-col gap-8 py-12 md:gap-32 md:py-32'>
      <div className='flex flex-col items-center gap-6 md:gap-12'>
        <h2 className='text-2xl font-medium text-gray-300 md:text-3xl'>
          {title}
        </h2>
        <Image
          src={image}
          width={1080}
          height={672}
          className='aspect-auto w-full rounded-lg object-cover'
          alt={'Case Section ' + title}
          unoptimized
        />
      </div>
    </section>
  );
};
