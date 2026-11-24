/** WHAT: Three simple booking steps. USED IN: app/page.tsx. TOOLS: steps data, icons. */
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';
import { steps } from '@/data/steps';

export default function Steps() {
  return (
    <section className="bg-ice py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="So funktioniert's"
            title="In drei Schritten zur Sauberkeit"
            description="Einfach anfragen, persönlich abstimmen und entspannt zurücklehnen."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(
            ({ id, number, title, description, icon: Icon }, index) => (
              <Reveal key={id} delay={index * 0.08}>
                <article className="h-full rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="bg-navy grid size-12 place-items-center rounded-2xl text-lg font-bold text-white">
                      {number}
                    </span>
                    <Icon className="text-brand size-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-navy mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
