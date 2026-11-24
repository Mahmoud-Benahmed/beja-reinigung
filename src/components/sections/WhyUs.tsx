/** WHAT: Explains the BEJA difference. USED IN: app/page.tsx. TOOLS: data, Image, shared UI. */
import { Check } from 'lucide-react';
import { reasons } from '@/data/reasons';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';

export default function WhyUs() {
  return (
    <section id="warum" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionTitle
            eyebrow="Warum BEJA?"
            title="Gute Arbeit, auf die Sie sich verlassen können"
            description="Wir nehmen uns Zeit für Ihre Wünsche und sorgen mit Sorgfalt für ein sauberes Ergebnis."
            align="left"
          />
          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li
                key={reason.id}
                className="flex items-start gap-3 text-base leading-7 text-slate-700"
              >
                <span className="bg-ice mt-1 grid size-6 shrink-0 place-items-center rounded-full">
                  <Check className="text-brand size-4" aria-hidden="true" />
                </span>
                {reason.text}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.12} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
            <div
              role="img"
              aria-label="Der Inhaber von BEJA reinigt einen Büroraum mit einer Bodenreinigungsmaschine"
              className="absolute inset-0 bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Ox0yHOpXihYVeukn7f5hPsRDUtc1Qx.png")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </div>
          <div className="bg-navy absolute -bottom-4 -left-3 rounded-2xl px-5 py-4 text-white shadow-lg sm:-left-6">
            <p className="font-handwriting text-xl text-blue-200">
              Sauberkeit, die man sieht!
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
