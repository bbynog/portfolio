import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#111827',
    description:
      "Gabriel Nogueira's portfolio. Built using Next.js 13. I'm a full stack web developer with four (4) years of experience.",
    dir: 'ltr',
    lang: 'en',
    name: 'Gabriel Nogueira',
    short_name: 'GabrielNog',
  };
}
