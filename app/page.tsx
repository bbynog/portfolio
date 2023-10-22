import { Metadata } from 'next';
import { HorizontalDivider } from './components/HorizontalDivider';
import { HeroSection } from './components/pages/home/HeroSection';
import { KnownTechs } from './components/pages/home/KnownTechs';
import { ProfessionalJourney } from './components/pages/home/ProfessionalJourney';
import { StarredProjects } from './components/pages/home/StarredProjects';

export const metadata: Metadata = {
  title: 'Gabriel Nogueira',
  description:
    "Gabriel Nogueira's portfolio website, built using next.js. I'm a full stack web developer with four 4 years of experience. Here I show skills like tailwind, react, node, typescript. Contact Me! :)",
  generator: 'Gabriel Nogueira',
  applicationName: 'Gabriel Nogueira Portfolio ',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Javascript',
    'Tailwind',
    'React Query',
    'Developer',
    'Hire',
    'Freelance',
    'Contract',
  ],
  authors: [{ name: 'Gabriel Nogueira' }],
  colorScheme: 'dark',
  creator: 'Gabriel Nogueira',
  publisher: 'Gabriel Nogueira',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gabrielnogueira.tech'),
};

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
