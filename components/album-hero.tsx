'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import DragElements from '@/components/fancy/blocks/drag-elements';
import useScreenSize from '@/hooks/use-screen-size';
import { cn } from '@/lib/utils';
import { squashImages } from '@/squash-images';
import { HeroSection } from './hero-section';

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const AlbumHero: React.FC = () => {
  const screenSize = useScreenSize();
  return (
    <div className="z-10 relative w-dvw h-dvh overflow-hidden">
      <DragElements
        dragMomentum={false}
        className={cn(
          // Z-index
          'z-20',
          // Positioning
          'absolute top-0 left-0',
          // Sizing
          'max-h-[50vh]',
          // Flexbox
          'flex items-center justify-center',
          // Padding
          'p-6 md:p-24'
          // Border
          // 'border-2 border-red-500'
        )}
      >
        {squashImages.map((url, index) => {
          const rotation = randomInt(-12, 12);
          const width = screenSize.lessThan(`md`) ? randomInt(90, 120) : randomInt(120, 150);
          const height = screenSize.lessThan(`md`) ? randomInt(120, 140) : randomInt(150, 180);

          return (
            <div
              key={index.toString() + Date.now()}
              className={cn(
                // Flexbox
                'flex items-start justify-center',
                // Styling
                'bg-white shadow-2xl',
                // Spacing
                'p-1'
              )}
              style={{
                width: `${width}px`,
                height: `${height}px`,
                transform: `rotate(${rotation}deg)`
              }}
            >
              <div
                className={`relative overflow-hidden`}
                style={{
                  width: `${width - 4}px`,
                  height: `${height - 30}px`
                }}
              >
                <Image src={url} fill alt={`Analog photo ${index + 1}`} className="object-cover" draggable={false} />
              </div>
            </div>
          );
        })}
      </DragElements>
      <motion.div
        className={cn(
          // Positioning
          'z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
          // Flexbox
          'flex flex-col items-center justify-center gap-6',
          // Sizing/Containers
          'max-w-2xl w-full h-auto mx-auto',
          // Padding
          'px-6 md:px-0 pt-[20dvh]',
          // Text
          'text-center'
          // Border
          // 'border-2 border-blue-500'
        )}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 0.25 }}
      >
        <HeroSection />
      </motion.div>{' '}
    </div>
  );
};

export { AlbumHero };
