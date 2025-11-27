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

      <div className="fixed bottom-4 left-4 right-4 text-center text-white/60 text-xs font-medium">
        Ouvert 7j/7 • Avenue de la Biste, 34670 Baillargues
      </div>
    </div>
  );
};

export default HomePage;
