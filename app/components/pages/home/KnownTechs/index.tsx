import { SectionTitle } from '@/app/components/SectionTitle';
import { KnownTechCard } from './KnownTechCard';
import { TbBrandNextjs } from 'react-icons/tb';

export const KnownTechs = () => {
  return (
    <div className='container pt-4 lg:pt-6'>
      <SectionTitle title='Knowledge' subtitle='expertise' />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 pt-[60px]'>
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTechCard
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next.js',
              startDate: '2022-01-01',
            }}
            key={`known-tech-card-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
