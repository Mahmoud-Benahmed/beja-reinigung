/**
 * src/lib/site.ts
 * WHAT: The single source of truth for ALL business data.
 *       Phone, email, company name, slogan, area, SEO text — all here and ONLY here.
 * USED IN: Imported by any component that needs to display business info:
 *          Navbar, Hero, Contact, Footer, layout.tsx (SEO metadata).
 * TOOLS: Plain TypeScript object — no framework or library needed.
 *
 * HOW TO UPDATE:
 * - Change the WhatsApp number → edit whatsappNumber and whatsappLink below
 * - Change the email address → edit email below
 * - After Vercel deployment → update seoUrl with the real Vercel URL
 *
 * RULE: Never hard-code phone numbers, emails or company names inside components.
 *       Always import them from this file. This way, one change here updates the
 *       whole website automatically.
 */

export const siteConfig = {
  // ── COMPANY IDENTITY ───────────────────────────────────────────────────────
  name: 'BEJA Reinigung', // Full legal company name
  logoName: 'Beja Reinigung', // Name as displayed on the logo
  slogan: 'Sauberkeit, die man sieht!', // Primary slogan (shown in hero heading)
  sloganSecondary: 'Sauberkeit, auf die Sie sich verlassen können!', // Footer slogan

  // ── CONTACT ────────────────────────────────────────────────────────────────
  // ⚠️  IMPORTANT: Replace these placeholders with real values before going live!
  // The owner must confirm: (1) the WhatsApp numbers, (2) the email address.

  // Each number has its own display text and its own WhatsApp link.
  // In wa.me links use digits only (no +, spaces or dashes).
  phones: [
    {
      label: 'WhatsApp 1',
      number: '+49 172 234 3849', // Displayed in the contact section
      link: 'https://wa.me/+491722343849?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Reinigungsservices',
    },
    {
      label: 'WhatsApp 2',
      number: '+49 172 913 9447', // ⚠️ Replace with the real second number
      link: 'https://wa.me/+491729139447?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Reinigungsservices', // ⚠️ Update with the real second number
    },
  ],

  email: 'mahmoudabderrahmen55@gmail.com', // ⚠️ Replace with the real email address

  // ── SERVICE AREA ───────────────────────────────────────────────────────────
  area: 'Frankfurt am Main und Umgebung',
  availability: '24/7 erreichbar',
  copyrightYear: 2026,

  // ── SEO METADATA ───────────────────────────────────────────────────────────
  // These are used in layout.tsx for <head> tags — important for Google and
  // for how the link looks when shared on WhatsApp and Instagram.
  seoTitle:
    'BEJA Reinigung',
  seoDescription:
    'Professionelle Reinigung in Frankfurt am Main: Fenster, Büro, Wohnung, Grundreinigung, Treppenhausreinigung und mehr. Jetzt Angebot anfordern!',
  // ⚠️ Update seoUrl after Vercel deployment with the real .vercel.app URL
  seoUrl: 'https://beja-reinigung.vercel.app',

  // ── SOCIAL / SHARING ───────────────────────────────────────────────────────
  // Open Graph image: shown as a preview when the link is shared on WhatsApp/Instagram
  ogImage: '/og-image.jpg',
} as const; // "as const" makes all values read-only — prevents accidental changes
