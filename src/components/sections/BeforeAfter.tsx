/** WHAT: Accessible before/after image comparisons. USED IN: app/page.tsx. TOOLS: React state, range input. */
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';

const comparisons = [
  {
    label: 'Fensterreinigung',
    before: '/images/before-1.jpg',
    after: '/images/after-1.jpg',
    beforeAlt: 'Fenster vor der Reinigung mit sichtbaren Schlieren',
    afterAlt: 'Klares, streifenfrei gereinigtes Fenster',
  },
  {
    label: 'Bodenreinigung',
    before: '/images/before-2.jpg',
    after: '/images/after-2.jpg',
    beforeAlt: 'Wohnungsboden vor der Reinigung mit sichtbaren Spuren',
    afterAlt: 'Sauberer und gepflegter Wohnungsboden',
  },
];

function Comparison({
  label,
  before,
  after,
  beforeAlt,
  afterAlt,
}: (typeof comparisons)[number]) {
  const [position, setPosition] = useState(50);
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <h3 className="text-navy px-5 pt-5 text-lg font-bold">{label}</h3>
      <div className="relative mt-4 aspect-[4/3] overflow-hidden">
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={after}
            alt={afterAlt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <span className="bg-navy/80 absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white">
          Nachher
        </span>
        <span className="bg-navy/80 absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold text-white">
          Vorher
        </span>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow"
          style={{ left: `${position}%` }}
        >
          <span className="bg-brand absolute top-1/2 left-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white text-white shadow">
            <ArrowLeftRight className="size-5" />
          </span>
        </div>
        <input
          aria-label={`${label}: Vorher-Nachher vergleichen`}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="px-5 py-4 text-sm text-slate-600">
        Schieben Sie den Regler, um den Unterschied zu sehen.
      </p>
    </article>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Der Unterschied"
            title="Sauberkeit, die den Unterschied macht"
            description="Bewegen Sie den Regler und entdecken Sie den Vorher-Nachher-Effekt."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {comparisons.map((comparison) => (
            <Reveal key={comparison.label}>
              <Comparison {...comparison} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
