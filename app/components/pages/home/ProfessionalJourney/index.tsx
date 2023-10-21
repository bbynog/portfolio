import { SectionTitle } from '@/app/components/SectionTitle';
import { JourneyItem } from './JourneyItem';

export const ProfessionalJourney = () => {
  return (
    <section className='container flex flex-col gap-10 pt-4 md:flex-row md:gap-4 lg:gap-16 lg:pt-6'>
      <div className='max-w-[420px]'>
        <SectionTitle title='Professional Journey' subtitle='journey' />
        <p className='pt-6 text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          possimus rerum accusantium neque culpa assumenda. Vero beatae,
          perspiciatis cupiditate saepe quisquam voluptatibus.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <JourneyItem />
        <JourneyItem />
      </div>
    </section>
  );
};
