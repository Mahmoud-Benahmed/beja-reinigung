/**
 * src/data/navigation.ts
 * WHAT: Navigation links for the Navbar component.
 *       All are anchor links that scroll to sections on the homepage.
 * USED IN: src/components/layout/Navbar.tsx
 * TOOLS: TypeScript NavItem interface from src/types.
 *
 * HOW TO ADD A MENU ITEM:
 * Add an object here — the Navbar updates automatically.
 * href should match the id on the section: id="leistungen" → href="#leistungen"
 */

import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Leistungen', href: '#leistungen' }, // Links to the Services section
  { label: 'Warum BEJA', href: '#warum' }, // Links to the Why Us section
  { label: 'Einsatzgebiet', href: '#einsatzgebiet' }, // Links to the Area section
  { label: 'Kontakt', href: '#kontakt' }, // Links to the Contact section
];
