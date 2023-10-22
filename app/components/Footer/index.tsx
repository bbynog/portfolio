import { IoMdHeart } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className='bg-gray-850 flex h-14 w-full items-center justify-center'>
      <span className='flex items-center gap-1.5 font-mono text-xs text-gray-400 sm:text-sm'>
        Made with
        <IoMdHeart size={13} className='text-purple-500' /> by
        <strong className='font-medium'>Gabriel Nogueira</strong>
      </span>
    </footer>
  );
};
