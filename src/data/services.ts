/**
 * src/data/services.ts
 * WHAT: Array of all 9 cleaning services offered by BEJA Gebäudereinigung.
 *       This data drives both the Services section cards AND the contact form dropdown.
 * USED IN:
 *   - src/components/sections/Services.tsx (the services grid)
 *   - src/components/sections/Contact.tsx (the service dropdown in the form)
 * TOOLS: lucide-react for icons, TypeScript Service interface from src/types.
 *
 * HOW TO ADD A SERVICE:
 * 1. Add a new object to this array.
 * 2. The Services section and contact form dropdown update automatically.
 * 3. Never touch any JSX files — the data drives the UI.
 *
 * FEATURED: The first 3 services have featured: true — they appear larger in the grid.
 */

import {
  Sparkles, // Window cleaning (sparkle = clean glass)
  Building2, // Office/commercial building
  Home, // House/apartment
  Brush, // Deep cleaning (brush = thorough)
  Leaf, // Garden (leaf = nature)
  Stairs, // Staircase
  Car, // Garage / underground parking
  ArrowLeftRight, // Move-in/move-out (arrows = coming and going)
  Wrench, // General work (wrench = general purpose)
} from 'lucide-react';
import type { Service } from '@/types';

export const services: Service[] = [
  // ── FEATURED SERVICES (displayed larger in the grid) ────────────────────
  {
    id: 'fenster',
    title: 'Fenster- und Glasreinigung',
    description: 'Klare Sicht – sauber und streifenfrei!',
    icon: Sparkles,
    featured: true,
  },
  {
    id: 'gebaude',
    title: 'Gebäudereinigung / Büro- und Gewerbereinigung',
    description: 'Sauberkeit für Ihre Immobilien und Büros!',
    icon: Building2,
    featured: true,
  },
  {
    id: 'wohnung',
    title: 'Wohnungs- und Hausreinigung',
    description: 'Gepflegte Wohnräume für Ihr Wohlbefinden.',
    icon: Home,
    featured: true,
  },
  // ── REGULAR SERVICES ────────────────────────────────────────────────────
  {
    id: 'grundreinigung',
    title: 'Grundreinigung und Unterhaltsreinigung',
    description: 'Tiefenreinigung und regelmäßige Pflege.',
    icon: Brush,
    featured: false,
  },
  {
    id: 'garten',
    title: 'Gartenpflege und Gartenreinigung',
    description: 'Gepflegte Außenanlagen das ganze Jahr.',
    icon: Leaf,
    featured: false,
  },
  {
    id: 'treppenhaus',
    title: 'Treppenhausreinigung',
    description: 'Saubere Treppenhäuser für Ihr Mietobjekt.',
    icon: Stairs,
    featured: false,
  },
  {
    id: 'keller',
    title: 'Reinigung von Kellern und Garagen / Tiefgaragen',
    description: 'Sauberkeit bis in die letzte Ecke!',
    icon: Car,
    featured: false,
  },
  {
    id: 'einzug',
    title: 'Ein- und Auszugsreinigung',
    description: 'Perfekte Übergabe – besenrein und mehr.',
    icon: ArrowLeftRight,
    featured: false,
  },
  {
    id: 'allgemein',
    title: 'Allgemeine Reinigungsarbeiten',
    description: 'Für alles, was sauber sein soll.',
    icon: Wrench,
    featured: false,
  },
];
