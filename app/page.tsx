import { Metadata } from 'next';
import { HorizontalDivider } from './components/HorizontalDivider';
import { HeroSection } from './components/pages/home/HeroSection';
import { KnownTechs } from './components/pages/home/KnownTechs';
import { ProfessionalJourney } from './components/pages/home/ProfessionalJourney';
import { StarredProjects } from './components/pages/home/StarredProjects';
import DEFAULT_METADATA from './DEFAULT_METADATA';

export const metadata: Metadata = DEFAULT_METADATA;

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HorizontalDivider />
      <StarredProjects />
      <HorizontalDivider />
      <ProfessionalJourney />
    </>
  );
}
