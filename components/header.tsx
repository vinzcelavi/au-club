import { FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FacebookIcon } from '@/components/icons/facebook';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  return (
    <header className="z-50 fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Logo />
          </a>

          {/* Contact Info & Social Links */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Social Icons */}
            <a
              href="https://www.facebook.com/squashheroes/"
              target="_blank"
              rel="noreferrer"
              className={cn(
                // Color & Background
                'text-white hover:bg-white/10',
                // Shape
                'rounded-lg',
                // Spacing
                'p-1.5',
                // Transition
                'transition-all duration-200',
                // Focus Ring
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-darker'
              )}
              aria-label="Lien Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/auclub_squash/"
              target="_blank"
              rel="noreferrer"
              className={cn(
                // Color & Background
                'text-white hover:bg-white/10',
                // Shape
                'rounded-lg',
                // Spacing
                'p-1.5',
                // Transition
                'transition-all duration-200',
                // Focus Ring
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-darker'
              )}
              aria-label="Lien Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

            {/* Location Link */}
            <a
              href="https://maps.app.goo.gl/bFaDMbYScBVgsuJ98"
              target="_blank"
              rel="noreferrer"
              className={cn(
                // Layout
                'flex items-center gap-2',
                // Color
                'text-white hover:bg-white/10',
                // Shape
                'rounded-lg',
                // Spacing
                'px-2 py-1 h-8',
                // Transition
                'transition-all duration-200',
                // Focus Ring
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-darker'
              )}
              aria-label="Aller au club"
            >
              <FaMapMarkerAlt className="relative md:-top-px w-4 h-4" />
              <span className="hidden sm:inline text-xs md:text-sm font-medium">Aller au club</span>
            </a>
            {/* Phone Number */}
            <a
              href="tel:0448780830"
              className={cn(
                // Layout
                'flex items-center gap-2',
                // Color
                'text-white hover:bg-white/10',
                // Shape
                'rounded-lg',
                // Spacing
                'px-2 py-1 h-8',
                // Transition
                'transition-all duration-200',
                // Focus Ring
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-darker'
              )}
              aria-label="Appeler Au Club"
            >
              <FaPhone className="relative md:-top-px w-4 h-4" />
              <span className="hidden sm:inline text-xs md:text-sm font-medium">04 48 78 08 30</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
