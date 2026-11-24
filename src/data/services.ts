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
  Footprints, // Staircase cleaning
  Car, // Garage / underground parking
  ArrowLeftRight, // Move-in/move-out (arrows = coming and going)
  Wrench, // General work (wrench = general purpose)
} from 'lucide-react';
import type { Service } from '@/types';

const serviceImages = {
  window:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%2B-cLEq8232kQKw7hPAebXBZfVruuqxT3.png',
  commercial:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Ox0yHOpXihYVeukn7f5hPsRDUtc1Qx.png',
  home: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-4i0WNo06ffUFcVz7f0zTHBludRHgWI.png',
  maintenance:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-7Lqqldr6pg6hgJNDPaTrGvc9twZBkB.png',
  garden:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-MwKC6PiW30I3y1SCsnYgSNPFVbVISI.png',
  stairs:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-oetxw1XCMKK5GUoKXMlpY9nm0sR1OM.png',
  garage:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Z5tvM0pOJpNWuZrYzN3o1EcZiNi6TJ.png',
  moving:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-CzDr5PbI37u98Ld0o73J3bzlxafg2T.png',
  general:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-C3LedpdYDUd90uT5ZEgRFcvYzqwzzF.png',
} as const;

export const services: Service[] = [
  // ── FEATURED SERVICES (displayed larger in the grid) ────────────────────
  {
    id: 'fenster',
    title: 'Fenster- und Glasreinigung',
    description: 'Klare Sicht – sauber und streifenfrei!',
    icon: Sparkles,
    featured: true,
    image: serviceImages.window,
    imageAlt: 'Der Inhaber von BEJA reinigt ein Fenster mit einem professionellen Abzieher',
  },
  {
    id: 'gebaude',
    title: 'Gebäudereinigung / Büro- und Gewerbereinigung',
    description: 'Sauberkeit für Ihre Immobilien und Büros!',
    icon: Building2,
    featured: true,
    image: serviceImages.commercial,
    imageAlt: 'Der Inhaber von BEJA reinigt einen Bürobereich mit einer Bodenmaschine',
  },
  {
    id: 'wohnung',
    title: 'Wohnungs- und Hausreinigung',
    description: 'Gepflegte Wohnräume für Ihr Wohlbefinden.',
    icon: Home,
    featured: true,
    image: serviceImages.home,
    imageAlt: 'Der Inhaber von BEJA reinigt ein Wohnzimmer',
  },
  // ── REGULAR SERVICES ────────────────────────────────────────────────────
  {
    id: 'grundreinigung',
    title: 'Grundreinigung und Unterhaltsreinigung',
    description: 'Tiefenreinigung und regelmäßige Pflege.',
    icon: Brush,
    featured: false,
    image: serviceImages.maintenance,
    imageAlt: 'Der Inhaber von BEJA reinigt eine Arbeitsfläche in einem Büro',
  },
  {
    id: 'garten',
    title: 'Gartenpflege und Gartenreinigung',
    description: 'Gepflegte Außenanlagen das ganze Jahr.',
    icon: Leaf,
    featured: false,
    image: serviceImages.garden,
    imageAlt: 'Der Inhaber von BEJA pflegt eine Hecke im Garten',
  },
  {
    id: 'treppenhaus',
    title: 'Treppenhausreinigung',
    description: 'Saubere Treppenhäuser für Ihr Mietobjekt.',
    icon: Footprints,
    featured: false,
    image: serviceImages.stairs,
    imageAlt: 'Der Inhaber von BEJA reinigt ein helles Treppenhaus',
  },
  {
    id: 'keller',
    title: 'Reinigung von Kellern und Garagen / Tiefgaragen',
    description: 'Sauberkeit bis in die letzte Ecke!',
    icon: Car,
    featured: false,
    image: serviceImages.garage,
    imageAlt: 'Der Inhaber von BEJA reinigt eine Tiefgarage mit einer Bodenmaschine',
  },
  {
    id: 'einzug',
    title: 'Ein- und Auszugsreinigung',
    description: 'Perfekte Übergabe – besenrein und mehr.',
    icon: ArrowLeftRight,
    featured: false,
    image: serviceImages.moving,
    imageAlt: 'Der Inhaber von BEJA reinigt Küchenschränke in einer Wohnung',
  },
  {
    id: 'allgemein',
    title: 'Allgemeine Reinigungsarbeiten',
    description: 'Für alles, was sauber sein soll.',
    icon: Wrench,
    featured: false,
    image: serviceImages.general,
    imageAlt: 'Der Inhaber von BEJA reinigt eine Küchenarbeitsfläche',
  },
];
