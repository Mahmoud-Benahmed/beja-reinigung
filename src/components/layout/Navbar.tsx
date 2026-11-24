/**
 * src/components/layout/Navbar.tsx
 * WHAT: The floating pill-shaped navigation bar fixed at the top of every page.
 *       Shows anchor links on desktop and a hamburger menu on mobile/tablet.
 * USED IN: src/app/page.tsx and legal pages (impressum, datenschutz).
 * TOOLS: Framer Motion (menu slide animation), lucide-react (icons),
 *        React hooks (useState, useEffect), siteConfig, navItems data.
 *
 * WHY "use client"?
 * - useState: tracks whether the mobile menu is open/closed and the active link
 * - useEffect: listens to scroll events (shadow + active section highlight)
 * - User interactions (hamburger click, scroll) need browser APIs
 * Server Components cannot do any of this.
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import MobileMenu from '@/components/layout/MobileMenu';
import { siteConfig } from '@/lib/site';
import { navItems } from '@/data/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const sectionHref = (href: string) => (pathname === '/' ? href : `/${href}`);

  // isOpen: tracks if the mobile hamburger menu is currently expanded
  const [isOpen, setIsOpen] = useState(false);

  // scrolled: becomes true once the user scrolls more than 20px (adds a shadow)
  const [scrolled, setScrolled] = useState(false);

  // active: the href (e.g. "#kontakt") of the currently highlighted nav link
  const [active, setActive] = useState('');

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the link of the section currently in view (home page only)
  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.href.replace('#', ''));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // Close the mobile menu when the user clicks a navigation link
  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={[
          'w-full max-w-6xl rounded-2xl bg-white px-4 py-3',
          'transition-shadow duration-300',
          scrolled ? 'shadow-xl' : 'shadow-md',
        ].join(' ')}
        aria-label="Hauptnavigation"
      >
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* ── LOGO ──────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="focus-visible:ring-brand flex items-center gap-2 rounded-lg px-1 focus-visible:ring-2 focus-visible:outline-none"
            onClick={() => {
              setActive('');
              handleNavClick();
            }}
          >
            <Image src="/logo.svg" alt="" width={40} height={40} priority />
            <span className="font-heading text-navy text-xl font-bold">
              {siteConfig.logoName}
            </span>
          </Link>

          {/* ── DESKTOP NAV LINKS (hidden below 1024px) ─────────────────── */}
          <ul className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={sectionHref(item.href)}
                    onClick={() => setActive(item.href)}
                    aria-current={isActive ? 'true' : undefined}
                    className={[
                      'focus-visible:ring-brand rounded-full border px-5 py-2.5 text-lg font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:outline-none active:scale-95',
                      isActive
                        ? 'bg-brand border-brand text-white shadow-md'
                        : 'text-navy hover:bg-ice hover:text-brand border-transparent',
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── HAMBURGER BUTTON (visible only below 1024px) ────────────── */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-ice text-navy focus-visible:ring-brand flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-blue-100 focus-visible:ring-2 focus-visible:outline-none lg:hidden"
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen}
          >
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