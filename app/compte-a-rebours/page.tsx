'Use client';

import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import AnimatedNumberCountdown from '@/components/ui/countdown-number';
import { cn } from '@/lib/utils';

const CountdownPage = () => {
  return (
    <main className="relative z-10">
      <div className="z-10 relative flex flex-col items-center justify-center w-dvw h-dvh overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-4 px-8 md:px-0 max-w-lg w-full h-auto mx-auto text-center">
          <Image src="/qr-code-min.png" alt="Google Favicon" width={100} height={100} className="block w-32 h-32" />
          <h1 className="mt-8 max-w-sm mx-auto text-xl md:text-2xl font-semibold text-white tracking-tighter">
            100 avis Google pour{' '}
            <span
              className="italic font-normal tracking-tight text-cream"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Morgan et Juju
            </span>{' '}
            pour Noël 🎁🎄
          </h1>
          <AnimatedNumberCountdown endDate={new Date('2025-12-25')} className="my-4" />
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ7evTd0WhthIRImFgaQEtPz4"
            target="_blank"
            rel="noreferrer"
            className={cn(
              // Layout and appearance
              'inline-flex items-center gap-2 px-8 py-3 mt-2 rounded-full font-semibold text-base',
              // Colors
              'bg-white text-primary-darker',
              // Hover state
              'hover:scale-105',
              // Focus state for accessibility
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary-darker',
              // Transition
              'transition-ease duration-150'
            )}
          >
            <Image
              src="/google-favicon-2025.svg"
              alt="Google Favicon"
              width={18}
              height={18}
              className="block w-4.5 h-4.5"
            />{' '}
            Laisser un avis Google
            <MoveRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default CountdownPage;
