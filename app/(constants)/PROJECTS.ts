export interface Project {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imageSrc: string;
  imageAlt: string;
  isStarred?: boolean;
  imageStyles?: string;
  productionUrl: string;
  screenshots?: { title: string; image: string; isMobile?: boolean }[];
  codeAvailable: boolean;
}

const PROJECTS: Project[] = [
  {
    title: 'Pan AI',
    description:
      "Co-Founder & Co-cto & Software Engineer. Pan AI is an AI Video/Content Generation and Distribution platform. Responsible for the front-end team and engaged in infra/project's discussions with backend and AI teams. Also worked with them when needed and sometimes when interested on each others work.",
    techStack: [
      'Next.js',
      'TypeScript',
      'Python',
      'Django',
      'FastAPI',
      'GCP',
      'AWS',
      'Vercel',
    ],
    url: '/projects/pan',
    imageSrc: '/images/pan/logo.gif',
    imageAlt: 'Pan Logo',
    isStarred: true,
    productionUrl: 'https://usepan.ai',
    screenshots: [
      {
        title: 'Home Page',
        image: '/images/pan/home.png',
      },
      {
        title: 'Profile',
        image: '/images/pan/profile.png',
      },
      {
        title: 'Internationalization Select',
        image: '/images/pan/intl.png',
      },
      {
        title: 'Videos',
        image: '/images/pan/videos.png',
      },
      {
        title: 'Video Details',
        image: '/images/pan/video-details.png',
      },
      {
        title: 'DevTools Lighthouse Score',
        image: '/images/pan/lighthouse.png',
      },
    ],
    codeAvailable: false,
  },
  {
    title: 'PowerApp',
    description:
      'POS App. Built using React Native. PowerApp was the first project that I got my hands on when working at TrueSoft. It surely taught me a lot about mobile applications, React Native and deployment on the stores.',
    techStack: [
      'React Native',
      'TypeScript',
      'React-Query',
      'Redux',
      'StyledComponents',
      'APIs',
    ],
    url: '/projects/powerapp',
    imageSrc: '/images/powerapp/powerapp-logo.png',
    imageAlt: 'PowerApp Logo',
    isStarred: true,
    productionUrl:
      'https://play.google.com/store/apps/details?id=com.powergestor.rnative',
    screenshots: [
      { title: 'Login', image: '/images/powerapp/login.jpg', isMobile: true },
      { title: 'Home', image: '/images/powerapp/home.jpg', isMobile: true },
      {
        title: 'Clients',
        image: '/images/powerapp/clients.jpg',
        isMobile: true,
      },
      {
        title: 'Sales Record',
        image: '/images/powerapp/sales.jpg',
        isMobile: true,
      },
      { title: 'Cart', image: '/images/powerapp/cart.jpg', isMobile: true },
      {
        title: 'Products',
        image: '/images/powerapp/products.jpg',
        isMobile: true,
      },
      {
        title: 'Checkout',
        image: '/images/powerapp/checkout.jpg',
        isMobile: true,
      },
      {
        title: 'Finance Module',
        image: '/images/powerapp/financ-1.jpg',
        isMobile: true,
      },
      {
        title: 'Finance Module',
        image: '/images/powerapp/financ-2.jpg',
        isMobile: true,
      },
    ],
    codeAvailable: false,
  },
  {
    title: 'PowerGestor',
    description:
      'ERP System. Built using AngularJS and React. Powergestor sure was a challenge. The whole system is huge and complex, but it was a great experience. It has a desktop(using electron), mobile(using cordova/capacitor) and web versions.',
    techStack: [
      'React',
      'TypeScript',
      'AngularJS',
      'JavaScript',
      'AWS',
      'Electron',
      'APIs',
    ],
    url: '/projects/powergestor',
    imageSrc: '/images/powergestor/powergestor-logo.png',
    imageAlt: 'PowerGestor Logo',
    isStarred: true,
    productionUrl: 'https://app.powergestor.com/',
    screenshots: [
      {
        title: 'Login',
        image: '/images/powergestor/powergestor-login.png',
      },
      {
        title: 'Home',
        image: '/images/powergestor/powergestor-home.png',
      },
      {
        title: 'Desktop POS - Home',
        image: '/images/powergestor/powergestor-pdv-home.png',
      },
      {
        title: 'Desktop POS - Sell',
        image: '/images/powergestor/powergestor-pdv-sell.png',
      },
    ],
    codeAvailable: false,
  },
  {
    title: 'PowerBonus',
    description:
      'Built using React and Capacitor. PowerBonus is a client-company fidelity program system. It was a system designed and mostly developed by me.',
    techStack: [
      'React',
      'TypeScript',
      'React-Query',
      'Redux',
      'StyledComponents',
      'APIs',
    ],
    url: '/projects/powerbonus',
    imageSrc: '/images/powerbonus/powerbonus-logo.ico',
    imageAlt: 'PowerApp Logo',
    imageStyles: 'object-contain bg-white',
    productionUrl: 'https://app.powergestor.com/loyalty/',
    isStarred: false,
    screenshots: [
      {
        title: 'Login',
        image: '/images/powerbonus/login.png',
      },
      {
        title: 'Home',
        image: '/images/powerbonus/home.png',
      },
      {
        title: 'Accountability',
        image: '/images/powerbonus/extract.png',
      },
    ],
    codeAvailable: false,
  },
];

export default PROJECTS;
