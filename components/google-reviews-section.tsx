'use client';

import Image from 'next/image';
import { Star } from '@/components/ui/star';
import { cn } from '@/lib/utils';

const GoogleReviewsSection = () => {
  return (
    <div className="w-auto max-w-2xl mx-auto px-4 mt-2">
      <a
        href="https://share.google/F3SDjWVN8TDsWrEGB"
        target="_blank"
        rel="noreferrer"
        aria-label="Voir les avis Google"
        className={cn(
          // Flexbox
          'inline-flex flex-col items-center justify-center gap-2',
          // Spacing & Width
          'p-3 w-auto mx-auto',
          // Border Radius
          'rounded-md',
          // Background
          'hover:bg-white/10 hover:backdrop-blur-sm',
          // Border
          'border-t-2 border-transparent hover:border-t-amber-400',
          // Transition
          'transition-all duration-300'
        )}
      >
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/google-favicon-2025.svg"
            alt="Google Favicon"
            width={18}
            height={18}
            className="block w-4.5 h-4.5"
          />
          {/* Stars */}
          <div className="flex justify-center gap-0.5 mt-0.5">
            {[...Array(5)].map((_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <we need a stable key for the children>
              <Star key={index} className="w-5 h-5 text-amber-400" />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="text-white text-xs font-normal">
            Note de <strong>4.9</strong> sur <strong>78</strong> avis
          </span>
        </div>
      </a>
    </div>
  );
};

export { GoogleReviewsSection };
