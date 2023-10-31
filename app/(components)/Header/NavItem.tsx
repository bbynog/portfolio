import { cn } from '@/app/(lib)/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 font-mono font-medium text-gray-400 transition-all',
        isActive && 'text-gray-50',
        !isActive && 'hover:text-gray-50',
      )}
    >
      <span className='text-purple-400'>#</span>
      {label}
    </Link>
  );
};
