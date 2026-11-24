/**
 * src/components/layout/WhatsAppButton.tsx
 * WHAT: A fixed floating green WhatsApp button always visible in the bottom-right corner.
 *       The primary conversion tool — always present so users can contact instantly.
 * USED IN: src/app/page.tsx (outside main sections, so it floats above everything).
 * TOOLS: lucide-react (MessageCircle icon), Tailwind CSS (fixed positioning), siteConfig.
 *
 * SAFE AREA: The mb-[env(safe-area-inset-bottom)] ensures the button is not hidden
 * behind the iPhone home indicator bar on modern iOS devices.
 */

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank" // Opens WhatsApp in a new tab (or the WhatsApp app on mobile)
      rel="noopener noreferrer" // Security: prevents the new tab accessing window.opener
      aria-label="Jetzt über WhatsApp kontaktieren" // Screen reader label (button has no visible text)
      className="
        fixed
        z-50
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-whatsapp
        text-white
        shadow-lg
        transition-transform duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2
        @media(hover:hover){hover:scale-110}
      "
      style={{
        // Position: 24px from bottom and right edges
        // We use inline style for the safe-area-inset because Tailwind can't
        // easily compute env() values in arbitrary value syntax cross-browser
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
        right: '1.5rem',
      }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
