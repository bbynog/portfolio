import { HorizontalDivider } from './components/HorizontalDivider';
import { HeroSection } from './components/pages/home/HeroSection';
import { KnownTechs } from './components/pages/home/KnownTechs';
import { StarredProjects } from './components/pages/home/StarredProjects';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HorizontalDivider />
      <StarredProjects />
    </>
  );
}
