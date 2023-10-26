import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroProfilePicture = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 200, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className='self-center'
    >
      <Image
        width={420}
        height={404}
        src={'/images/profile-pic.jpeg'}
        alt='Gabriel Nogueira Profile Picture'
        className='mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-low lg:mb-0 lg:h-[404px] lg:w-[420px]'
      />
    </motion.div>
  );
};
