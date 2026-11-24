/**
 * src/lib/utils.ts
 * WHAT: Shared helper/utility functions used across the project.
 * USED IN: Components that need to merge conditional Tailwind class names.
 * TOOLS: Plain TypeScript — no libraries needed.
 */

/**
 * cn (classNames helper)
 * Merges multiple class-name strings into one, filtering out falsy values.
 *
 * WHY? In React with Tailwind, we often need to conditionally apply classes:
 *   cn('bg-brand', isActive && 'opacity-100', !isActive && 'opacity-50')
 *   → 'bg-brand opacity-50'   (when isActive is false)
 *
 * Without cn() we'd have to write ugly string templates with ternaries.
 *
 * @param classes - Any number of strings, booleans, undefined or null
 * @returns A single space-separated class string
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  // filter(Boolean) removes anything falsy: false, null, undefined, ''
  // .join(' ') combines the remaining strings with spaces
  return classes.filter(Boolean).join(' ');
}
