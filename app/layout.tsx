import type { Metadata } from 'next';
import { Instrument_Serif, Poppins } from 'next/font/google';
import '@/app/globals.css';
import Script from 'next/script';
import { AnimationGradient } from '@/components/animation-gradient';
import { Header } from '@/components/header';
import { Celavi } from '@/components/icons/celavi';
import { cn } from '@/lib/utils';

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
      <body className={`${poppins.variable} ${instrumentSerif.variable} antialiased`}>
        <div className="h-dvh">
          <AnimationGradient />

          <Header />

          {children}

          <div className="z-30 fixed right-6 md:right-3 bottom-6">
            <a
              href="https://celavi.fr"
              target="_blank"
              rel="noreferrer"
              className={cn(
                // Layout
                'flex items-center gap-2',
                // Typography
                'text-xs text-foreground font-italic',
                // Interaction
                'hover:text-white/80',
                // Rotation
                'transform rotate-180',
                // Animation/Transition
                'transition-colors duration-200'
              )}
              style={{
                writingMode: 'vertical-rl'
              }}
            >
              <span className="font-normal">Web Design</span>{' '}
              <Celavi className="w-auto h-4.5 animate-spin-slow inline-flex" /> Vincent Bianciotto
            </a>
          </div>

          <footer
            className={cn(
              // Layout
              'flex flex-col md:flex-row items-center justify-center gap-1',
              // Positioning
              'z-20 fixed bottom-5 left-4 right-4',
              // Typography
              'text-xs font-medium text-center',
              // Color
              'text-white/60 hover:text-white/80',
              // Animation/Transition
              'transition-colors duration-200'
            )}
          >
            <span>Ouvert 7j/7</span>
            <span className="hidden md:inline">•</span>
            <a href="https://maps.app.goo.gl/bFaDMbYScBVgsuJ98" target="_blank" rel="noreferrer">
              Avenue de la Biste, 34670 Baillargues
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
