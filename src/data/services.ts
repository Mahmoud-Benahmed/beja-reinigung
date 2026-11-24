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

const serviceCollageImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-81vWTNpytuAMW4h5iyPMrNZ7QagnrO.png';

export const services: Service[] = [
  // ── FEATURED SERVICES (displayed larger in the grid) ────────────────────
  {
    id: 'fenster',
    title: 'Fenster- und Glasreinigung',
    description: 'Klare Sicht – sauber und streifenfrei!',
    icon: Sparkles,
    featured: true,
    image: serviceCollageImage,
    imageAlt: 'Der Inhaber von BEJA reinigt ein Fenster mit Blick auf Frankfurt',
    imagePosition: '40% 0%',
  },
  {
    id: 'gebaude',
    title: 'Gebäudereinigung / Büro- und Gewerbereinigung',
    description: 'Sauberkeit für Ihre Immobilien und Büros!',
    icon: Building2,
    featured: true,
    image: serviceCollageImage,
    imageAlt: 'Der Inhaber von BEJA reinigt den Boden einer hellen Bürolobby',
    imagePosition: '0% 41%',
  },
  {
    id: 'wohnung',
    title: 'Wohnungs- und Hausreinigung',
    description: 'Gepflegte Wohnräume für Ihr Wohlbefinden.',
    icon: Home,
    featured: true,
    image: serviceCollageImage,
    imageAlt: 'Der Inhaber von BEJA reinigt ein helles Wohnzimmer',
    imagePosition: '100% 0%',
  },
  // ── REGULAR SERVICES ────────────────────────────────────────────────────
  {
    id: 'grundreinigung',
    title: 'Grundreinigung und Unterhaltsreinigung',
    description: 'Tiefenreinigung und regelmäßige Pflege.',
    icon: Brush,
    featured: false,
    image: serviceCollageImage,
    imageAlt: 'Der Inhaber von BEJA führt eine gründliche Bodenreinigung durch',
    imagePosition: '0% 41%',
  },
  {
    id: 'garten',
    title: 'Gartenpflege und Gartenreinigung',
    description: 'Gepflegte Außenanlagen das ganze Jahr.',
    icon: Leaf,
    featured: false,
    image: serviceCollageImage,
    imageAlt: 'Der Inhaber von BEJA pflegt eine Gartenanlage',
    imagePosition: '50% 41%',
  },
  {
    id: 'treppenhaus',
    title: 'Treppenhausreinigung',
    description: 'Saubere Treppenhäuser für Ihr Mietobjekt.',
    icon: Footprints,
    featured: false,
    image: serviceCollageImage,
    imageAlt: 'Der Inhaber von BEJA reinigt ein helles Treppenhaus',
    imagePosition: '100% 41%',
  },
  {
    id: 'keller',
    title: 'Reinigung von Kellern und Garagen / Tiefgaragen',
    description: 'Sauberkeit bis in die letzte Ecke!',
    icon: Car,
    featured: false,
    image: serviceCollageImage,
    imageAlt: 'Der Inhaber von BEJA reinigt den Boden einer Tiefgarage',
    imagePosition: '0% 77%',
  },
  {
    id: 'einzug',
    title: 'Ein- und Auszugsreinigung',
    description: 'Perfekte Übergabe – besenrein und mehr.',
    icon: ArrowLeftRight,
    featured: false,
    image: serviceCollageImage,
    imageAlt: 'Der Inhaber von BEJA reinigt eine leere Wohnung vor der Übergabe',
    imagePosition: '50% 77%',
  },
  {
    id: 'allgemein',
    title: 'Allgemeine Reinigungsarbeiten',
    description: 'Für alles, was sauber sein soll.',
    icon: Wrench,
    featured: false,
    image: serviceCollageImage,
    imageAlt: 'Der Inhaber von BEJA bei allgemeinen Reinigungsarbeiten',
    imagePosition: '100% 77%',
  },
];
