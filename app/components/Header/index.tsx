import Image from 'next/image';
import Link from 'next/link';
import { NavItem } from './NavItem';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
];

export const Header = () => {
  return (
    <header className='absolute top-0 z-10 flex h-24 w-full items-center justify-center'>
      <div className='container flex items-center justify-between'>
        <Link href={'/'}>
          <Image
            width={58}
            height={49}
            src={'/images/logo.png'}
            alt='Logo Gabriel Nogueira Dev'
            className='shadow-regular rounded-full'
          />
        </Link>
        <nav className='flex items-center gap-4 sm:gap-10'>
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
