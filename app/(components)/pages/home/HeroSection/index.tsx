'use client';

import { TechBadge } from '../../../TechBadge';

import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandGmail,
} from 'react-icons/tb';

import { motion } from 'framer-motion';
import TECH_BADGES from '@/app/(constants)/TECH_BADGES';
import { techBadgeAnimation } from '@/app/(lib)/animations';
import React from 'react';
import { HeroProfilePicture } from './HeroProfilePicture';

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

const HeroSection = () => {
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
              Hello! My name is
            </p>
            <h2 className='pt-2 text-4xl font-medium'>Gabriel Nogueira</h2>
          </div>

          <p className='py-6 text-sm text-gray-300 sm:text-base'>
            I'm a software engineer, <b>deeply</b> passionate about life &
            technology! With over 5 years of professional tech experience, my
            career goal is to bring great solutions to humankind's greatest
            problems through technology.
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

            <div className='flex h-20 items-center gap-3 text-2xl text-gray-50 lg:text-gray-400'>
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  target='_blank'
                  className='transition-colors lg:hover:text-gray-50'
                  key={`contact-${index}`}
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <HeroProfilePicture />
      </div>
    </section>
  );
};

export default HeroSection;
