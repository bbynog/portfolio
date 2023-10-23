import { ProjectDetails } from '@/app/components/pages/project/ProjectDetails';
import { ProjectSection } from '@/app/components/pages/project/ProjectSection';
import PROJECTS from '@/app/constants/PROJECTS';

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
  const powergestor = PROJECTS[0];
  return (
    <div>
      <ProjectDetails
        title={powergestor.title}
        description={powergestor.description}
        techStack={powergestor.techStack}
        productionUrl={'https://app.powergestor.com/'}
      />
      <ProjectSection {...PROJECT_SECTIONS_MOCK[0]} />
      <ProjectSection {...PROJECT_SECTIONS_MOCK[1]} />
    </div>
  );
}
