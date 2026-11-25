/**
 * src/data/steps.ts
 * WHAT: The 3-step "So funktioniert's" (How it works) process.
 *       Explains how easy it is to book BEJA's services.
 * USED IN: src/components/sections/Steps.tsx
 * TOOLS: lucide-react icons, TypeScript Step interface from src/types.
 */

import { MessageSquare, FileText, CalendarCheck } from 'lucide-react';
import type { Step } from '@/types';

export const steps: Step[] = [
  {
    id: 's1',
    number: 1,
    title: 'Anfrage senden',
    description:
      'Schreiben Sie uns über WhatsApp oder füllen Sie unser Kontaktformular aus. Wir melden uns schnell!',
    icon: MessageSquare, // Chat bubble icon — represents contacting via message
  },
  {
    id: 's2',
    number: 2,
    title: 'Unverbindliches Angebot erhalten',
    description:
      'Sie erhalten ein klares Angebot ohne versteckte Kosten transparent und fair.',
    icon: FileText, // Document icon — represents the written quote
  },
  {
    id: 's3',
    number: 3,
    title: 'Termin & Sauberkeit genießen',
    description:
      'Wir kommen zum vereinbarten Termin und hinterlassen alles makellos sauber.',
    icon: CalendarCheck, // Calendar with checkmark — represents the confirmed appointment
  },
];
