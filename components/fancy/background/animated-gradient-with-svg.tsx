'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useDimensions } from '@/hooks/use-debounced-dimensions';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: 'light' | 'medium' | 'heavy';
}

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

interface GradientConfig {
  top: number;
  left: number;
  tx1: number;
  ty1: number;
  tx2: number;
  ty2: number;
  tx3: number;
  ty3: number;
  tx4: number;
  ty4: number;
  width: number;
  height: number;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ colors, speed = 5, blur = 'light' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);
  const [gradientConfigs, setGradientConfigs] = useState<GradientConfig[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Generate random values only on client after mount
  useEffect(() => {
    setIsMounted(true);
    setGradientConfigs(
      colors.map(() => ({
        top: Math.random() * 50,
        left: Math.random() * 50,
        tx1: Math.random() - 0.5,
        ty1: Math.random() - 0.5,
        tx2: Math.random() - 0.5,
        ty2: Math.random() - 0.5,
        tx3: Math.random() - 0.5,
        ty3: Math.random() - 0.5,
        tx4: Math.random() - 0.5,
        ty4: Math.random() - 0.5,
        width: randomInt(0.5, 1.5),
        height: randomInt(0.5, 1.5)
      }))
    );
  }, [colors]);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  const blurClass = blur === 'light' ? 'blur-2xl' : blur === 'medium' ? 'blur-3xl' : 'blur-[100px]';

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {isMounted &&
          colors.map((color, index) => {
            const config = gradientConfigs[index];
            if (!config) return null;

            const animationProps = {
              animation: `background-gradient ${speed}s infinite ease-in-out`,
              animationDuration: `${speed}s`,
              top: `${config.top}%`,
              left: `${config.left}%`,
              '--tx-1': config.tx1,
              '--ty-1': config.ty1,
              '--tx-2': config.tx2,
              '--ty-2': config.ty2,
              '--tx-3': config.tx3,
              '--ty-3': config.ty3,
              '--tx-4': config.tx4,
              '--ty-4': config.ty4
            } as React.CSSProperties;

            return (
              <svg
                key={`animated-gradient-${index.toString() + Date.now()}`}
                className={cn('absolute', 'animate-background-gradient')}
                width={circleSize * config.width}
                height={circleSize * config.height}
                viewBox="0 0 100 100"
                style={animationProps}
              >
                <title>Animated Gradient</title>
                <circle cx="50" cy="50" r="50" fill={color} />
              </svg>
            );
          })}
      </div>
    </div>
  );
};

export default AnimatedGradient;
