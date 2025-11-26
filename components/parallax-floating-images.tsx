'use client';

import { motion, stagger, useAnimate } from 'motion/react';
import { useEffect } from 'react';
import Floating, { FloatingElement } from '@/components/fancy/image/parallax-floating';
import { HeroSection } from '@/components/hero-section';
import { squashImages } from '@/squash-images';

const ParallaxFloatingHero = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('img', { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, [animate]);

  return (
    <div className="flex w-dvw h-dvh justify-center items-center overflow-hidden" ref={scope}>
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <HeroSection />
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[18%] left-[11%]">
          {/** biome-ignore lint/performance/noImgElement: <no need to add aria-label> */}
          <motion.img
            initial={{ opacity: 0 }}
            src={squashImages[0]}
            className="w-16 h-16 md:w-24 md:h-24 object-cover border-2 border-white hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[20%] left-[32%]">
          {/** biome-ignore lint/performance/noImgElement: <no need to add aria-label> */}
          <motion.img
            initial={{ opacity: 0 }}
            src={squashImages[1]}
            className="w-20 h-20 md:w-28 md:h-28 object-cover border-2 border-white hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[12%] left-[62%]">
          {/** biome-ignore lint/performance/noImgElement: <no need to add aria-label> */}
          <motion.img
            initial={{ opacity: 0 }}
            src={squashImages[2]}
            className="w-28 h-40 md:w-40 md:h-52 object-cover border-2 border-white hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[32%] left-[83%]">
          {/** biome-ignore lint/performance/noImgElement: <no need to add aria-label> */}
          <motion.img
            initial={{ opacity: 0 }}
            src={squashImages[3]}
            className="w-24 h-24 md:w-32 md:h-32 object-cover border-2 border-white hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[8%]">
          {/** biome-ignore lint/performance/noImgElement: <no need to add aria-label> */}
          <motion.img
            initial={{ opacity: 0 }}
            src={squashImages[4]}
            className="w-28 h-28 md:w-36 md:h-36 object-cover border-2 border-white hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          {/** biome-ignore lint/performance/noImgElement: <no need to add aria-label> */}
          <motion.img
            initial={{ opacity: 0 }}
            src={squashImages[7]}
            className="w-28 h-28 md:w-36 md:h-28 object-cover border-2 border-white hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[22%]">
          {/** biome-ignore lint/performance/noImgElement: <no need to add aria-label> */}
          <motion.img
            initial={{ opacity: 0 }}
            src={squashImages[5]}
            className="w-40 md:w-52 h-full object-cover border-2 border-white hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          {/** biome-ignore lint/performance/noImgElement: <no need to add aria-label> */}
          <motion.img
            initial={{ opacity: 0 }}
            src={squashImages[6]}
            className="w-24 h-24 md:w-32 md:h-32 object-cover border-2 border-white hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
};

export { ParallaxFloatingHero };
