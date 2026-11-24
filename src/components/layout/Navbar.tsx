/**
 * src/components/layout/Navbar.tsx
 * WHAT: The floating pill-shaped navigation bar fixed at the top of every page.
 *       Shows anchor links on desktop and a hamburger menu on mobile/tablet.
 * USED IN: src/app/page.tsx and legal pages (impressum, datenschutz).
 * TOOLS: Framer Motion (menu slide animation), lucide-react (icons),
 *        React hooks (useState, useEffect), siteConfig, navItems data.
 *
 * WHY "use client"?
 * - useState: tracks whether the mobile menu is open/closed
 * - useEffect: listens to scroll events to add a shadow to the navbar
 * - User interactions (hamburger click, scroll) need browser APIs
 * Server Components cannot do any of this.
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import MobileMenu from '@/components/layout/MobileMenu';
import { siteConfig } from '@/lib/site';
import { navItems } from '@/data/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const sectionHref = (href: string) => (pathname === '/' ? href : `/${href}`);

  // isOpen: tracks if the mobile hamburger menu is currently expanded (true) or collapsed (false)
  const [isOpen, setIsOpen] = useState(false);

  // scrolled: becomes true once the user scrolls more than 20px — used to add a shadow
  const [scrolled, setScrolled] = useState(false);

  // useEffect runs AFTER the component first mounts in the browser.
  // We can't attach scroll listeners during server rendering (no window there).
  useEffect(() => {
    const handleScroll = () => {
      // If scrollY > 20px, we consider the user to have scrolled
      setScrolled(window.scrollY > 20);
    };

    // { passive: true } tells the browser we won't call preventDefault() — improves scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Return a cleanup function: remove the listener when the component unmounts
    // This prevents memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // [] means: run this effect only once, on mount

  // Close the mobile menu when the user clicks a navigation link
  const handleNavClick = () => setIsOpen(false);

  return (
    // fixed: stays in place as the user scrolls
    // top-0 left-0 right-0: stretches across the full width
    // z-50: on top of all page content
    // flex justify-center: the pill navbar is centered with space on the sides
    <header className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={[
          'w-full max-w-6xl rounded-2xl bg-white px-4 py-3',
          'transition-shadow duration-300',
          // Add a stronger shadow once scrolled — makes the navbar feel elevated
          scrolled ? 'shadow-xl' : 'shadow-md',
        ].join(' ')}
        aria-label="Hauptnavigation"
      >
        <div className="flex items-center justify-between">
          {/* ── LOGO ──────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="focus-visible:ring-brand flex items-center gap-2 rounded-lg px-1 focus-visible:ring-2 focus-visible:outline-none"
            onClick={handleNavClick}
          >
            <Image src="/logo.svg" alt="" width={40} height={40} priority />
            <span className="font-heading text-navy text-xl font-bold">
              {siteConfig.logoName}
            </span>
          </Link>

          {/* ── DESKTOP NAV LINKS (hidden on screens below 1024px) ──────── */}
          {/* hidden lg:flex: invisible on mobile/tablet, flex row on desktop */}
          <ul className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={sectionHref(item.href)}
                  className="hover:text-brand focus-visible:ring-brand rounded-sm py-1 text-sm font-medium text-gray-700 transition-colors duration-150 focus-visible:ring-2 focus-visible:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── DESKTOP WHATSAPP BUTTON (hidden below 1024px) ───────────── */}
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp focus-visible:ring-whatsapp hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>

          {/* ── HAMBURGER BUTTON (visible only below 1024px) ────────────── */}
          {/* lg:hidden: show on mobile/tablet, hide on desktop */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-ice text-navy focus-visible:ring-brand flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-blue-100 focus-visible:ring-2 focus-visible:outline-none lg:hidden"
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen} // Tells screen readers whether the menu is open
          >
            {/* Show X when menu is open, hamburger when closed */}
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <MobileMenu
          isOpen={isOpen}
          onNavigate={handleNavClick}
          sectionHref={sectionHref}
        />
      </nav>
    </header>
  );
}
