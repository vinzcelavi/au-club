'use client';

import AnimatedGradient from '@/components/fancy/background/animated-gradient-with-svg';

const gradientColors = ['#038C8C', '#025159', '#00272B'];

const AnimationGradient = () => {
  return (
    <span className="absolute inset-0 z-0 pointer-events-none">
      <AnimatedGradient colors={gradientColors} speed={30} blur="heavy" />
    </span>
  );
};

export { AnimationGradient };
