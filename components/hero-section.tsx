import { cn } from '@/lib/utils';
import { GoogleReviewsSection } from './google-reviews-section';
import { FlipWords } from './ui/flip-words';

const FLIP_WORDS = ['au Squash.', 'à la Pétanque.', 'au Bar.', 'en terrasse.'];

const HeroSection = () => {
  return (
    <>
      {/* Main Title */}
      <h1 className="text-[2rem] md:text-5xl font-semibold text-white leading-[1.1] tracking-tighter">
        Venez vivre des
        <br />
        moments inoubliables
        <br />
        <span
          className="italic font-normal tracking-tight text-cream"
          style={{ fontFamily: 'var(--font-instrument-serif)' }}
        >
          <FlipWords words={FLIP_WORDS} /> <br />
        </span>
      </h1>
      {/* Subtitle */}
      <p className="text-sm md:text-base text-white/70 max-w-md mx-auto font-normal leading-relaxed">
        On vous attend dans votre club préféré à <strong>Baillargues</strong> !
        <br />
        <span className="hidden md:block">
          Notre site se refait une beauté mais vous pouvez toujours réserver votre court en ligne.
        </span>
      </p>
      <a
        href="http://auclub.onmss.com/"
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
        Réserver un court
      </a>
      <GoogleReviewsSection />
    </>
  );
};

export { HeroSection };
