import { AlbumHero } from '@/components/album-hero';
import { AnimationGradient } from '@/components/animation-gradient';
import { Header } from '@/components/header';
import { Celavi } from '@/components/icons/celavi';
import { cn } from '@/lib/utils';

const HomePage = () => {
  return (
    <div className="h-dvh">
      <AnimationGradient />

      <Header />

      <main className="relative z-10">
        <AlbumHero />
      </main>

      <div className="z-30 fixed right-4 md:right-3 bottom-6">
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
  );
};

export default HomePage;
