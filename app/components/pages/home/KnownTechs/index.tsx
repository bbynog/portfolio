'use client';

import { SectionTitle } from '@/app/components/SectionTitle';
import { KnownTechCard } from './KnownTechCard';

import TECH_BADGES from '@/app/constants/TECH_BADGES';
import { motion } from 'framer-motion';

export const KnownTechs = () => {
  return (
    <div className='container pt-4 lg:pt-6'>
      <SectionTitle title='Knowledge' subtitle='expertise' />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 pt-[60px]'>
        {TECH_BADGES.map((tech, index) => (
          <motion.div
            key={`tech-badges-known-techs-${index}`}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          >
            <KnownTechCard {...tech} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
