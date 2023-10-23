'use client';

import { TbArrowNarrowUp } from 'react-icons/tb';
import { Button } from '../Button';
import { scrollToElement } from '../../lib/scrollToElement';
import { useCallback, useEffect, useState } from 'react';

export const BackToTop = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) {
      setShow(true);
    }
    if (show && window.scrollY <= 500) {
      setShow(false);
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {show && (
        <div className='fixed bottom-4 right-4 z-20 transition-all'>
          <Button
            onClick={handleClick}
            className='shadow-lg shadow-purple-400/20'
          >
            <TbArrowNarrowUp size={20} />
          </Button>
        </div>
      )}
    </>
  );
};
