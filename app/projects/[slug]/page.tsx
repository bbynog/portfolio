import DEFAULT_METADATA from '@/app/DEFAULT_METADATA';
import { ProjectDetails } from '@/app/components/pages/project/ProjectDetails';
import { ProjectSection } from '@/app/components/pages/project/ProjectSection';
import PROJECTS, { Project } from '@/app/constants/PROJECTS';
import { Metadata } from 'next';

type ProjectProps = {
  params: {
    slug: string;
  };
};

const mapProject = (slug: string) => {
  switch (slug) {
    case 'powergestor':
      return PROJECTS[0];
    case 'powerapp':
      return PROJECTS[1];
    case 'powerbonus':
      return PROJECTS[2];
    default:
      return null;
  }
};

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const slug = params.slug;
  const project = mapProject(slug);

  if (!project) {
    return DEFAULT_METADATA;
  }

  return {
    ...DEFAULT_METADATA,
    title: `${project.title} | Gabriel Nogueira`,
    keywords: project.techStack,
    description: project.description,
  };
}

export default function Project({ params: { slug } }: ProjectProps) {
  const project = mapProject(slug);

  if (!project) {
    return null;
  }
  return (
    <div>
      <ProjectDetails
        title={project.title}
        description={project.description}
        techStack={project.techStack}
        productionUrl={project.productionUrl}
      />
      {project.screenshots?.map((screenshot, index) => {
        return (
          <ProjectSection {...screenshot} key={`project-section-ss-${index}`} />
        );
      })}
    </div>
  );
}
