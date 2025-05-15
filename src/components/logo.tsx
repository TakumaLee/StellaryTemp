import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
      aria-label="Stellary Logo"
      {...props}
    >
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Simple Star Shape */}
      <path
        fill="url(#starGradient)"
        d="M50 5 L61.8 38.2 L97.5 38.2 L67.9 58.5 L79.6 91.8 L50 71.5 L20.4 91.8 L32.1 58.5 L2.5 38.2 L38.2 38.2 Z"
      />
    </svg>
  );
}
