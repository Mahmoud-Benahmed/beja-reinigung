/**
 * src/components/ui/Reveal.tsx
 * WHAT: A scroll-in animation wrapper. When wrapped in <Reveal>, any content
 *       fades up into view the first time it enters the browser viewport.
 * USED IN: Every section component — wraps cards, headings, and content blocks.
 * TOOLS: Framer Motion (useInView, motion, useReducedMotion), React useRef hook.
 *
 * HOW THE ANIMATION WORKS (step by step):
 * 1. We attach a ref to a <div> wrapper (using useRef).
 * 2. Framer Motion's useInView watches that div and fires when it scrolls into view.
 * 3. The motion.div starts invisible and shifted down 30px (initial state).
 * 4. When isInView becomes true, it animates to fully visible at its normal position.
 * 5. once: true means it only plays once — the element stays visible after animating in.
 *
 * ACCESSIBILITY:
 * useReducedMotion() reads the system "prefers-reduced-motion" setting.
 * If enabled (by users with motion sensitivity), we skip animations entirely.
 *
 * "use client" is required because:
 * - useRef, useInView, and useReducedMotion all need browser APIs (the DOM).
 * - Server Components cannot use browser-only hooks.
 */

'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode; // The content to animate
  delay?: number; // Seconds to wait before starting the animation (for staggered effects)
  className?: string; // Extra classes for the wrapper div
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
}: RevealProps) {
  // useRef creates a stable reference to the DOM element.
  // We pass this to both the div and useInView so it knows which element to watch.
  const ref = useRef<HTMLDivElement>(null);

  // useInView returns true when the ref'd element enters the viewport.
  // margin: '0px 0px -80px 0px' means the animation starts 80px before the element
  // is fully in view — this gives a slightly earlier, smoother trigger.
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  // Check if the user has enabled "reduce motion" in their OS accessibility settings.
  // If true, we skip animations to avoid causing discomfort.
  const prefersReducedMotion = useReducedMotion();

  // Skip animation entirely for users who prefer reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      // initial: the starting state — invisible and shifted 30px down
      initial={{ opacity: 0, y: 30 }}
      // animate: when isInView is true, transition to fully visible at normal position
      // when isInView is false (not yet seen), hold the initial state
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      // transition: controls the speed and easing of the animation
      transition={{
        duration: 0.5, // Half a second
        delay, // Wait this many seconds before starting (for staggered card effects)
        ease: 'easeOut', // Start fast, slow down at the end (natural feel)
      }}
    >
      {children}
    </motion.div>
  );
}
