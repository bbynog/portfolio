import Image from 'next/image';
import { TechBadge } from '../../TechBadge';
import { Button } from '../../Button';

import { HiArrowNarrowDown, HiArrowNarrowRight } from 'react-icons/hi';
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandGmail,
} from 'react-icons/tb';
import { useWindowSize } from '@/app/hooks/useWindowSize';

const MOCK_CONTACTS = [
  {
    url: 'https://github.com',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://linkedin.com',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://whatsapp.com',
    icon: <TbBrandWhatsapp />,
  },
  {
    url: 'https://gmail.com',
    icon: <TbBrandGmail />,
  },
];

export const HeroSection = () => {
  return (
    <section className='lg-pb-[110px] flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px]'>
      <div className='container flex flex-col-reverse items-start justify-between lg:flex-row'>
        <div className='w-full lg:max-w-[530px]'>
          <p className='pt-2 font-mono text-purple-400 lg:pt-0'>
            Hello, my name is
          </p>
          <h2 className='pt-2 text-4xl font-medium'>Gabriel Nogueira</h2>

          <p className='py-6 text-sm text-gray-400 sm:text-base'>
            Hello! I'm a web developer, passionate about <b>tech</b>. With over{' '}
            <b>4 years of experience.</b> My goal is to build beautiful and
            performant user interfaces and this is my portfolio! :)
          </p>
          <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]'>
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name='next-js' key={`tech-badge-${index}`} />
            ))}
          </div>
          <div className='mt-6 flex flex-row items-center gap-5 lg:mt-10'>
            <Button className='shadow-button'>
              Contact Me
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className='flex h-20 items-center gap-3 text-2xl text-gray-600'>
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  target='_blank'
                  className='transition-colors hover:text-gray-100'
                  key={`contact-${index}`}
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src={'/images/profile-pic.jpeg'}
          alt='Gabriel Nogueira Profile Picture'
          className='mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-button lg:mb-0 lg:h-[404px] lg:w-[420px]'
        />
      </div>
    </section>
  );
};
