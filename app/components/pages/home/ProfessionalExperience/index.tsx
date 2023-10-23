import { SectionTitle } from '@/app/components/SectionTitle';
import { ExperienceItem } from './ExperienceItem';

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

const EXPERIENCE_MOCK: ExperienceItemProps[] = [
  {
    companyName: 'TrueSoft',
    job: 'Frontend and Mobile Developer',
    description:
      "Had the opportunity to handle all the processes relative to the company's Mobile applications and to do maintenance/implement new features on the Frontend applications",
    skills: [
      'React.js',
      'React Native',
      'TypeScript',
      'JavaScript',
      'AngularJS',
      'AWS',
      'Electron',
      'APIs',
    ],
    iconSrc: '/images/powergestor-mini-logo.png',
    iconAlt: 'TrueSoft Logo',
    companyWebsite: 'https://www.truesoft.com.br/',
    startDate: 'may 2021 • oct 2023',
  },
  {
    companyName: 'Various',
    job: 'FullStack Web Developer',
    description:
      'Here I bundled my contracts as a freelancer for various companies.',
    skills: [
      'Next.js 13',
      'React Native',
      'React.js',
      'TypeScript',
      'Redux',
      'React-Query',
      'TailwindCSS',
    ],
    iconSrc: '/images/portfolio-mini-logo.ico',
    iconAlt: 'Gabriel Nogueira Logo',
    companyWebsite: 'https://gabrielnogueira.tech',
    startDate: 'apr 2018 • Moment (5 years)',
  },
];

export const ProfessionalExperience = () => {
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

        <ExperienceItem {...EXPERIENCE_MOCK[0]} />
        <ExperienceItem {...EXPERIENCE_MOCK[1]} />
      </div>
    </section>
  );
};
