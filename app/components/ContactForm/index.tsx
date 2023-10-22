'use client';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { Button } from '../Button';
import { SectionTitle } from '../SectionTitle';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const { handleSubmit, register, setValue } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log('form data', data);

    //
    //
    // deal with message

    setValue('name', '');
    setValue('email', '');
    setValue('message', '');
  };
  return (
    <section className='flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32'>
      <div className='mx-auto w-full max-w-[420px]'>
        <SectionTitle subtitle='contact' title='Get in touch!' className='' />

        <form
          className='mt-12 flex w-full flex-col gap-4'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder='Name'
            className='h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 shadow-low ring-purple-800 transition-shadow placeholder:text-gray-400 focus:shadow-regular focus:outline-none focus:ring-2'
            {...register('name')}
          />
          <input
            placeholder='Email'
            type='email'
            className='h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 shadow-low ring-purple-800 transition-shadow placeholder:text-gray-400 focus:shadow-regular focus:outline-none focus:ring-2'
            {...register('email')}
          />
          <textarea
            placeholder='Message'
            maxLength={500}
            className='h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 shadow-low ring-purple-800 transition-shadow placeholder:text-gray-400 focus:shadow-regular focus:outline-none focus:ring-2'
            {...register('message')}
          />
          <div className='pt-6'>
            <Button className='mx-auto h-max shadow-regular'>
              Send message
              <HiArrowNarrowRight size={18} />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
