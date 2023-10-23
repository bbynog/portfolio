import { ProjectDetails } from '@/app/components/pages/project/ProjectDetails';
import { ProjectSection } from '@/app/components/pages/project/ProjectSection';

const PROJECT_SECTIONS_MOCK = [
  {
    title: 'Login',
    image: '/images/powergestor-background.png',
  },
  {
    title: 'Home',
    image: '/images/powergestor-background.png',
  },
];

export default function Project() {
  return (
    <div>
      <ProjectDetails />
      <ProjectSection {...PROJECT_SECTIONS_MOCK[0]} />
      <ProjectSection {...PROJECT_SECTIONS_MOCK[1]} />
    </div>
  );
}
