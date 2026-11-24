/** WHAT: Frankfurt service area showcase. USED IN: app/page.tsx. TOOLS: Image and site data. */
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import Container from '@/components/ui/Container';

export default function Area() {
  return (
    <section
      id="einsatzgebiet"
      className="bg-navy relative isolate scroll-mt-28 overflow-hidden py-20 text-white sm:py-28"
    >
      <Image
        src="/images/skyline.jpg"
        alt="Frankfurter Skyline am Main bei Sonnenuntergang"
        fill
        sizes="100vw"
        className="z-0 object-cover"
      />
      <div className="bg-navy/80 absolute inset-0 z-10" />
      <Container className="relative z-20 grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold tracking-[.15em] text-blue-200 uppercase">
            <MapPin className="size-5" aria-hidden="true" />
            Unser Einsatzgebiet
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl leading-tight font-bold sm:text-5xl">
            Wir sind in <span className="text-brand">Frankfurt am Main</span>{' '}
            und Umgebung
          </h2>
          <p className="font-handwriting mt-5 text-3xl text-blue-100 sm:text-4xl">
            Wir sind immer für Sie da!
          </p>
        </div>
        <p className="rounded-3xl border border-white/20 bg-white/10 p-7 text-xl leading-8 backdrop-blur-sm sm:p-9">
          Ob Privat oder Gewerbe wir sorgen für Sauberkeit und einen
          glänzenden Eindruck!
        </p>
        <p className="sr-only">Wir reinigen in {siteConfig.area}.</p>
      </Container>
    </section>
  );
}
