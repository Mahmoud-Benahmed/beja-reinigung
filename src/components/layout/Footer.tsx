/**
 * src/components/layout/Footer.tsx
 * WHAT: The footer shown at the bottom of every page.
 *       Contains logo/slogan, legal links (Impressum, Datenschutz), and copyright.
 * USED IN: src/app/page.tsx (last element), impressum/page.tsx, datenschutz/page.tsx.
 * TOOLS: Tailwind CSS for layout, Next.js Link for internal navigation, siteConfig for data.
 *
 * WHY no "use client"? The footer has no interactivity (no state, no events),
 * so it's a Server Component — faster to render, no JavaScript bundle cost.
 */

import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Two-column layout on tablet+, single column on mobile */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* ── LEFT: Logo and slogans ───────────────────────────────────────── */}
          <div>
            {/* Logo and wordmark identify the brand in the footer. */}
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="" width={44} height={44} />
              <p className="font-heading text-2xl font-bold text-white">
                {siteConfig.logoName}
              </p>
            </div>

            {/* Secondary slogan in handwriting font (Caveat) — matches brand poster style */}
            <p className="font-handwriting mt-2 text-lg text-blue-200">
              {siteConfig.name} – {siteConfig.sloganSecondary}
            </p>

            {/* Service area */}
            <p className="mt-3 text-sm text-blue-300">{siteConfig.area}</p>
          </div>

          {/* ── RIGHT: Legal links ───────────────────────────────────────────── */}
          {/* md:items-end: aligns the links to the right on desktop */}
          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-sm font-semibold text-blue-200">Rechtliches</p>
            {/* aria-label: tells screen readers this is the "Legal links" navigation */}
            <nav aria-label="Rechtliche Links">
              <ul className="flex gap-6">
                <li>
                  {/* Next.js Link for client-side navigation (no full page reload) */}
                  <Link
                    href="/impressum"
                    className="focus-visible:ring-brand rounded-sm text-sm text-blue-300 transition-colors hover:text-white focus-visible:ring-2 focus-visible:outline-none"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="focus-visible:ring-brand rounded-sm text-sm text-blue-300 transition-colors hover:text-white focus-visible:ring-2 focus-visible:outline-none"
                  >
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-blue-400">
            © {siteConfig.copyrightYear} {siteConfig.name}. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
