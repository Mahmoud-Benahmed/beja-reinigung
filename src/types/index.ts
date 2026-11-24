/**
 * src/types/index.ts
 * WHAT: Shared TypeScript type definitions used across the entire project.
 * USED IN: Imported by data files (services.ts, etc.) and components that need typed props.
 * TOOLS: TypeScript interfaces — they describe the "shape" (structure) of objects.
 *
 * WHY have a types file? By defining types once here, every part of the app agrees
 * on the structure of data. TypeScript warns us at build time if we pass wrong data.
 */

import type { LucideIcon } from 'lucide-react';

// ─── SERVICE ────────────────────────────────────────────────────────────────
// Describes one cleaning service card in the Services section.
export interface Service {
  id: string; // Unique key for React lists (e.g. "fenster", "gebaude")
  title: string; // German service name shown on the card
  description: string; // Short German tagline shown below the title
  icon: LucideIcon; // Icon component from lucide-react (e.g. Sparkles)
  featured?: boolean; // If true, the card is displayed larger (first 3 services)
  image?: string; // Optional service photograph or image URL
  imageAlt?: string; // German description for the service photograph
  imagePosition?: string; // Position of a service photo within the supplied collage
}

// ─── REASON ─────────────────────────────────────────────────────────────────
// Describes one bullet point in the "Warum BEJA?" section.
export interface Reason {
  id: string; // Unique key for React lists
  text: string; // German reason text shown next to a check mark
}

// ─── STEP ───────────────────────────────────────────────────────────────────
// Describes one numbered step in the "So funktioniert's" section.
export interface Step {
  id: string; // Unique key
  number: number; // Display number shown in the circle (1, 2, or 3)
  title: string; // German step title
  description: string; // German step description
  icon: LucideIcon; // Icon component for this step
}

// ─── NAV ITEM ───────────────────────────────────────────────────────────────
// Describes one navigation link in the Navbar.
export interface NavItem {
  label: string; // German label visible to users (e.g. "Leistungen")
  href: string; // Anchor link (e.g. "#leistungen") or page path
}

// ─── BEFORE/AFTER PAIR ──────────────────────────────────────────────────────
// Describes one image pair for the interactive drag slider.
export interface BeforeAfterPair {
  id: string; // Unique key
  beforeSrc: string; // Path to the "before" (dirty) image in /public/images/
  afterSrc: string; // Path to the "after" (clean) image
  beforeAlt: string; // German alt text for the before image (accessibility)
  afterAlt: string; // German alt text for the after image
  label: string; // Label shown above the slider (e.g. "Fensterreinigung")
}

// ─── CONTACT FORM DATA ──────────────────────────────────────────────────────
// Describes all the values in the contact form.
export interface ContactFormData {
  name: string; // Full name of the person contacting
  phone: string; // Phone number (optional field)
  email: string; // Email address (required)
  service: string; // Which service they are interested in (dropdown)
  message: string; // Their message / description of needs
  consent: boolean; // Whether they agreed to the privacy policy (required)
  honeypot: string; // Hidden anti-spam field — bots fill it, real users don't see it
}

// ─── FORM STATUS ────────────────────────────────────────────────────────────
// Tracks the state of the contact form submission.
// idle: nothing happened yet
// loading: waiting for EmailJS response
// success: email was sent successfully
// error: something went wrong
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';
