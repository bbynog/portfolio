import { SectionTitle } from '@/app/(components)/SectionTitle';
import { ExperienceItem } from './ExperienceItem';
import COMPANIES from '@/app/(constants)/COMPANIES';

interface ExperienceItemProps {
  companyName: string;
  job: string;
  description: string;
  skills: string[];
  iconSrc: string;
  iconAlt: string;
  companyWebsite: string;
  startDate: string;
}

const ProfessionalExperience = () => {
  return (
    <section className='container flex flex-col gap-10 pt-4 md:flex-row md:gap-4 lg:gap-16 lg:pt-6'>
      {/* <div className='max-w-[420px]'> */}
      {/* <p className='pt-6 text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          possimus rerum accusantium neque culpa assumenda. Vero beatae,
          perspiciatis cupiditate saepe quisquam voluptatibus.
        </p> */}
      {/* </div> */}
      <div className='flex flex-col gap-4'>
        <SectionTitle title='Work Experience' subtitle='experience' />

        <ExperienceItem {...COMPANIES[0]} />
        <ExperienceItem {...COMPANIES[1]} />
      </div>
    </section>
  );
};

export default ProfessionalExperience;
