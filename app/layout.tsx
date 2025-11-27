import type { Metadata } from 'next';
import { Instrument_Serif, Poppins } from 'next/font/google';
import '@/app/globals.css';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif'
});

export const metadata: Metadata = {
  title: 'Au Club | Squash - Bar - Food',
  description:
    'Venez vivre des moments inoubliables en jouant au Squash chez Au Club à Baillargues. Réservez votre court dès maintenant.',
  keywords: ['squash', 'Baillargues', 'sport', 'Au Club', 'réservation court', 'food', 'bar', 'restaurant', 'pétanque'],
  openGraph: {
    title: 'Au Club - Squash à Baillargues',
    description: 'Venez vivre des moments inoubliables en jouant au Squash chez Au Club à Baillargues.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="apple-mobile-web-app-title" content="Au Club" />
        {/* Load Seline only in production or when token is configured */}
        {process.env.NEXT_PUBLIC_SELINE_TOKEN && process.env.NODE_ENV === 'production' && (
          <Script
            src="https://cdn.seline.com/seline.js"
            strategy="afterInteractive"
            data-token={process.env.NEXT_PUBLIC_SELINE_TOKEN}
          />
        )}
      </head>
      <body className={`${poppins.variable} ${instrumentSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
