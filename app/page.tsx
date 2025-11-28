import { AlbumHero } from '@/components/album-hero';
import { AnimationGradient } from '@/components/animation-gradient';
import { Header } from '@/components/header';

const HomePage = () => {
  return (
    <div className="h-dvh">
      <AnimationGradient />

      <Header />

      <main className="relative z-10">
        <AlbumHero />
      </main>

      <div className="z-20 fixed bottom-4 left-4 right-4 text-center text-white/60 text-xs font-medium">
        Ouvert 7j/7 •{' '}
        <a href="https://maps.app.goo.gl/bFaDMbYScBVgsuJ98" target="_blank" rel="noreferrer">
          Avenue de la Biste, 34670 Baillargues
        </a>
      </div>
    </div>
  );
};

export default HomePage;
