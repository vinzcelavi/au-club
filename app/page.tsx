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
    </div>
  );
};

export default HomePage;
