'use client';

import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode, Suspense } from 'react';
import { Header } from './(components)/Header';
import { Analytics } from '@vercel/analytics/react';
import { ContactForm } from './(components)/ContactForm';
import { Footer } from './(components)/Footer';
import { BackToTop } from './(components)/BackToTop';
import { Toaster } from './(components)/Toaster';
import { LoaderIcon } from 'react-hot-toast';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='pt-BR' className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />

        <Header />
        <Suspense
          fallback={
            <div className='mx-auto flex justify-center'>
              <LoaderIcon />
            </div>
          }
        >
          {children}
        </Suspense>
        <ContactForm />
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
