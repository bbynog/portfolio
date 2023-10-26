import DEFAULT_METADATA from '../constants/DEFAULT_METADATA';
import { PageIntroduction } from '../components/pages/projects/PageIntroduction';
import { ProjectsList } from '../components/pages/projects/ProjectsList';

export const metadata = {
  ...DEFAULT_METADATA,
  title: 'Projects | Gabriel Nogueira',
};

export default function Projects() {
  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  );
}
