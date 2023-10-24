'use client';

import Image from 'next/image';
import { TechBadge } from '../../../TechBadge';

import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandGmail,
} from 'react-icons/tb';

import { motion } from 'framer-motion';
import TECH_BADGES from '@/app/constants/TECH_BADGES';
import { techBadgeAnimation } from '@/app/lib/animations';

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/bbynog',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/bbynog/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://wa.me/5584996834627',
    icon: <TbBrandWhatsapp />,
  },
  {
    url: 'mailto:gcruznogueira@gmail.com',
    icon: <TbBrandGmail />,
  },
];

export const HeroSection = () => {
  return (
    <section className='lg-pb-[110px] flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px]'>
      <div className='container flex flex-col-reverse items-start justify-between lg:flex-row'>
        <motion.div
          className='w-full lg:max-w-[530px]'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-center lg:text-left'>
            <p className='pt-2 font-mono text-purple-400 lg:pt-0'>
              Hello, my name is
            </p>
            <h2 className='pt-2 text-4xl font-medium'>Gabriel Nogueira</h2>
          </div>

          <p className='py-6 text-sm text-gray-400 sm:text-base'>
            I'm a web developer, passionate about <b>tech</b>. With over
            <b> 4 years of experience.</b> My goal is to build beautiful,
            performant user interfaces and this is my portfolio! :)
          </p>
          <div className='flex flex-wrap gap-x-2 gap-y-3'>
            {TECH_BADGES.map(({ name }, index) => (
              <TechBadge
                name={name}
                key={`tech-badges-hero-section-${index}`}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              />
            ))}
          </div>
          <div className='mt-6 flex flex-row items-center gap-5 lg:mt-10'>
            <p className='flex items-center justify-center gap-1'>
              <span className='text-gray-200'>Social Media</span>
              <HiArrowNarrowRight />
            </p>

            <div className='flex h-20 items-center gap-3 text-2xl text-gray-100 lg:text-gray-600'>
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  target='_blank'
                  className='transition-colors lg:hover:text-gray-100'
                  key={`contact-${index}`}
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

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
      </div>
    </section>
  );
};
