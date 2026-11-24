/**
 * src/components/ui/Container.tsx
 * WHAT: A layout wrapper that centers content and caps its maximum width.
 *       Used by every section so text never stretches too wide on large monitors.
 * USED IN: Almost every section component wraps its content in <Container>.
 * TOOLS: Tailwind CSS for centering (mx-auto) and max-width (max-w-7xl).
 *
 * WHY? On a 1440px wide monitor, text that spans the full width is very hard to
 * read. max-w-7xl caps the content at ~1280px and mx-auto centers it.
 * The px-4/sm:px-6/lg:px-8 adds breathing room on the sides at each screen size.
 */

import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode; // Whatever is placed between <Container> ... </Container>
  className?: string; // Optional extra Tailwind classes to add
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={[
        'mx-auto', // Center horizontally inside its parent
        'w-full', // Take up full available width (up to the max)
        'max-w-7xl', // Cap at ~1280px on large screens
        'px-4', // 16px side padding on mobile
        'sm:px-6', // 24px side padding on small screens (640px+)
        'lg:px-8', // 32px side padding on large screens (1024px+)
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
