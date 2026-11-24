/** WHAT: Four brand promises below the hero. USED IN: app/page.tsx. TOOLS: lucide-react. */
import { Clock3, ShieldCheck, Sparkles, ThumbsUp } from 'lucide-react';
import Container from '@/components/ui/Container';

const items = [
  { label: 'Verlässlich', icon: ShieldCheck },
  { label: 'Professionell', icon: Sparkles },
  { label: 'Faire Preise', icon: ThumbsUp },
  { label: '24/7 erreichbar', icon: Clock3 },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Unsere Versprechen"
      className="border-b border-blue-100 bg-white py-6"
    >
      <Container className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-3">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="text-navy flex items-center justify-center gap-2 text-sm font-semibold sm:text-base"
          >
            <Icon className="text-brand size-5 shrink-0" aria-hidden="true" />
            {label}
          </div>
        ))}
      </Container>
    </section>
  );
}
