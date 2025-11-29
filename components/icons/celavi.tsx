const Celavi = ({ className }: { className?: string }) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <no need to add a title>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" fill="none" className={className}>
    <path
      fill="currentColor"
      d="M65.838 211.632 29.11 184.959l31.482-55.967L2 101.883l13.992-43.725 63.4 12.68L86.827 7h46.348l7.433 64.713 63.401-13.118L218 102.32l-59.466 27.109 31.919 55.968-36.728 26.672-44.162-47.66-44.162 47.66.437-.437Z"
    />
    <defs>
      <linearGradient id="a" x1="110" x2="110" y1="7" y2="212.069" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F1C40F" />
        <stop offset="1" stop-color="#D946EF" />
      </linearGradient>
    </defs>
  </svg>
);

export { Celavi };
