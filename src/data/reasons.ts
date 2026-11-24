/**
 * src/data/reasons.ts
 * WHAT: Array of reasons why customers should choose BEJA Gebäudereinigung.
 *       Shown as a check list in the "Warum BEJA?" section.
 * USED IN: src/components/sections/WhyUs.tsx
 * TOOLS: TypeScript Reason interface from src/types.
 */

import type { Reason } from '@/types';

export const reasons: Reason[] = [
  { id: 'r1', text: 'Zuverlässige und pünktliche Arbeit' },
  { id: 'r2', text: 'Gründliche und professionelle Reinigung' },
  { id: 'r3', text: 'Faire und transparente Preise' },
  { id: 'r4', text: 'Flexible Termine' },
  { id: 'r5', text: 'Freundlicher Kundenservice' },
  { id: 'r6', text: 'Zufriedene Kunden stehen bei uns an erster Stelle!' },
];
