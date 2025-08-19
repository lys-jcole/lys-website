import React from 'react';
import { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import '../globals.css';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import { routing } from '../../i18n/routing'; // your locale list

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Lys Intelligence - AI-Powered 5G Network Optimization',
  description:
    'Professional telecom AI solutions for 5G network operations, providing real-time scalable tools for wireless network reliability and resilience.',
  generator: 'v0.app',
};

// params.locale will be passed by Next.js because you put layout under app/[locale]/layout.tsx
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${sourceSans.variable} antialiased`}
    >
      <body className="font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
