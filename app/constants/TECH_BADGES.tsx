import { ReactNode } from 'react';
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandTypescript,
} from 'react-icons/tb';

type TechBadge = {
  name: string;
  startDate: string;
  icon: ReactNode;
};

const TECH_BADGES: TechBadge[] = [
  {
    name: 'Next.js',
    startDate: '2022-01-01',
    icon: <TbBrandNextjs />,
  },
  {
    name: 'React.js',
    startDate: '2020-04-01',
    icon: <TbBrandReact />,
  },
  {
    name: 'React Native',
    startDate: '2021-01-01',
    icon: <TbBrandReactNative />,
  },
  {
    name: 'Node.js',
    startDate: '2022-01-01',
    icon: <TbBrandJavascript />,
  },
  {
    name: 'TypeScript',
    startDate: '2020-01-01',
    icon: <TbBrandTypescript />,
  },
];

export default TECH_BADGES;
