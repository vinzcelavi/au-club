import type { Metadata } from 'next';
import { Instrument_Serif, Poppins } from 'next/font/google';
import './globals.css';

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
  title: 'Au Club - Squash Bar Food',
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
      <body className={`${poppins.variable} ${instrumentSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
