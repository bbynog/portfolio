'use client';

import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from './components/Header';
import { Analytics } from '@vercel/analytics/react';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

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
        <Header />
        {children}
        <ContactForm />
        <Footer />

        <BackToTop />

        <Analytics />
      </body>
    </html>
  );
}
