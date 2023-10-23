import { SectionTitle } from '@/app/components/SectionTitle';
import { KnownTechCard } from './KnownTechCard';
import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandReactNative,
} from 'react-icons/tb';

export const KnownTechs = () => {
  return (
    <div className='container pt-4 lg:pt-6'>
      <SectionTitle title='Knowledge' subtitle='expertise' />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 pt-[60px]'>
        <KnownTechCard
          tech={{
            icon: <TbBrandNextjs />,
            name: 'Next.js',
            startDate: '2022-01-01',
          }}
        />
        <KnownTechCard
          tech={{
            icon: <TbBrandReact />,
            name: 'React.js',
            startDate: '2020-04-01',
          }}
        />
        <KnownTechCard
          tech={{
            icon: <TbBrandReactNative />,
            name: 'React Native',
            startDate: '2021-01-01',
          }}
        />
        <KnownTechCard
          tech={{
            icon: <TbBrandJavascript />,
            name: 'Node.js',
            startDate: '2022-01-01',
          }}
        />
        <KnownTechCard
          tech={{
            icon: <TbBrandTypescript />,
            name: 'TypeScript',
            startDate: '2020-01-01',
          }}
        />
      </div>
    </div>
  );
};
