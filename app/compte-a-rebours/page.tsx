'Use client';

import AnimatedNumberCountdown from '@/components/ui/countdown-number';

const CountdownPage = () => {
  return (
    <main className="relative z-10">
      <div className="z-10 relative flex flex-col items-center justify-center w-dvw h-dvh overflow-hidden">
        <div className="flex flex-col items-center justify-center px-8 md:px-0 max-w-lg w-full h-auto mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tighter">
            100 avis Google pour
            <span
              className="italic font-normal tracking-tight text-cream"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Morgan et Juju
            </span>{' '}
            pour Noël 🎁🎄
          </h1>
          <AnimatedNumberCountdown endDate={new Date('2025-12-25')} className="my-4" />
        </div>
      </div>
    </main>
  );
};

export default CountdownPage;
