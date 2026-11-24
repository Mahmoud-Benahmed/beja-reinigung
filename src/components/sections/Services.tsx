/** WHAT: Nine cleaning services. USED IN: app/page.tsx. TOOLS: service data and shared cards. */
import { services } from '@/data/services';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ui/ServiceCard';

export default function Services() {
  return (
    <section id="leistungen" className="bg-ice scroll-mt-28 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Unsere Leistungen"
            title="Sauberkeit für jeden Anspruch"
            description="Wir bieten professionelle Reinigungsdienstleistungen für Privat- und Geschäftskunden. Ob Wohnung, Haus, Büro oder Garten – wir kümmern uns um Sauberkeit, Ordnung und ein gepflegtes Erscheinungsbild."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 0.06}>
              <ServiceCard
                service={service}
                featured={Boolean(service.featured)}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
