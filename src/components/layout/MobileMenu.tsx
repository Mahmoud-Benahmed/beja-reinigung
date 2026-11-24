/** WHAT: Animated mobile navigation links. USED IN: Navbar.tsx. TOOLS: Framer Motion and shared navigation data. */
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onNavigate: () => void;
  sectionHref: (href: string) => string;
}

export default function MobileMenu({
  isOpen,
  onNavigate,
  sectionHref,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="overflow-hidden lg:hidden"
        >
          <ul className="flex flex-col gap-1 pt-3 pb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={sectionHref(item.href)}
                  onClick={onNavigate}
                  className="hover:bg-ice hover:text-brand block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
