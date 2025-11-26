const Star = ({ className }: { className?: string }) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <no need to add title>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
      <path d="m243-144 90-291L96-624h291l93-288 93 288h291L627-435l90 291-237-180-237 180Z" />
    </svg>
  );
};

export { Star };
