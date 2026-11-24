/**
 * src/components/ui/Badge.tsx
 * WHAT: A small pill-shaped badge for status indicators.
 *       Used in the Hero section for "Jetzt verfügbar · Antwort in unter 1 Stunde".
 * USED IN: src/components/sections/Hero.tsx
 * TOOLS: Tailwind CSS — rounded-full creates the pill shape, backdrop-blur creates
 *        the frosted glass effect on the navy background.
 */

import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode; // Content inside the badge (text, icons, dots)
  className?: string; // Optional extra classes
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2', // Horizontal layout with gap between items
        'rounded-full', // Pill shape
        'border border-white/20', // Subtle white border (20% opacity — looks glass-like on dark bg)
        'bg-white/10', // Semi-transparent white background (frosted glass effect)
        'backdrop-blur-sm', // Blurs what's behind the badge (frosted glass)
        'px-4 py-1.5', // Inner spacing
        'text-sm font-medium text-white', // Small white text
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
