/**
 * src/components/ui/Button.tsx
 * WHAT: Reusable button/link component with multiple visual variants.
 *       Ensures consistent button styles across the entire site.
 * USED IN: Hero (two CTAs), Contact (submit button), Navbar (WhatsApp button).
 * TOOLS: Tailwind CSS for styles, TypeScript for safe props.
 *
 * WHY variants? The site has three distinct button styles:
 * - primary: brand blue background (main call-to-action)
 * - whatsapp: green background (WhatsApp contact — green is the WhatsApp brand color)
 * - outline: white border on dark backgrounds (secondary actions on navy sections)
 *
 * HOW IT WORKS:
 * Pass href to render an <a> link that looks like a button.
 * Without href, renders a <button> element (e.g. the submit button in the form).
 */

import type { ButtonHTMLAttributes, ReactNode } from 'react';

// The three allowed button styles
type ButtonVariant = 'primary' | 'whatsapp' | 'outline';
// Three allowed sizes
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode; // The button's visible content (text, icon, etc.)
  variant?: ButtonVariant; // Visual style (default: 'primary')
  size?: ButtonSize; // Size (default: 'md')
  className?: string; // Extra Tailwind classes
  href?: string; // If provided, renders as <a> (a link styled as a button)
  target?: string; // For <a> links: '_blank' opens in a new tab
  rel?: string; // For <a> links: 'noopener noreferrer' for security
  onClick?: () => void; // Click handler for <button> elements
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']; // 'button' | 'submit' | 'reset'
  disabled?: boolean; // Disables the button (e.g. during form submission)
  'aria-label'?: string; // Accessibility label for icon-only buttons
}

// Map each variant name to its Tailwind classes
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white hover:bg-blue-600 focus-visible:ring-brand',
  whatsapp:
    'bg-whatsapp text-white hover:bg-green-600 focus-visible:ring-whatsapp',
  // outline: used on navy backgrounds — white border, white text, turns navy on hover
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-navy focus-visible:ring-white',
};

// Map each size name to its Tailwind padding and text size
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  rel,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  // Base classes shared by ALL buttons regardless of variant or size
  const baseClasses = [
    'inline-flex items-center justify-center gap-2', // Flexbox layout for icon + text
    'rounded-full', // Pill shape (matches the brand style)
    'font-semibold', // Bold text
    'transition-all duration-200', // Smooth color/transform transitions on hover
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2', // Visible focus ring for keyboard users
    'disabled:opacity-60 disabled:cursor-not-allowed', // Muted look when disabled
    'min-h-[44px]', // iOS tap target minimum: 44×44px (required for accessibility)
    variantClasses[variant], // Apply the variant's specific colors
    sizeClasses[size], // Apply the size's padding and text size
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // If href is provided, render an <a> tag that looks like a button
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  // Otherwise render a standard <button> element
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
