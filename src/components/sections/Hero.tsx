/** WHAT: Main conversion hero. USED IN: app/page.tsx. TOOLS: Image, icons, shared UI. */
import { ArrowDown, Check, Clock3 } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

const assurances = ['Professionell', 'Zuverlässig', 'Flexibel', 'Faire Preise'];

export default function Hero() {
  return (
    <section className="bg-navy relative overflow-hidden pt-32 pb-16 text-white sm:pt-36 sm:pb-20 lg:min-h-dvh lg:pt-36">
      <div className="bg-brand/20 pointer-events-none absolute -top-32 -right-40 size-[32rem] rounded-full blur-3xl" />
      <Container className="relative grid items-start gap-12 lg:min-h-[calc(100dvh-14rem)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <Reveal className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50">
            <span className="size-2 rounded-full bg-emerald-400" />
            Jetzt verfügbar · Antwort in unter 1 Stunde
          </div>
          <h1 className="max-w-xl text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="brush-underline">{siteConfig.slogan}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100/90">
            Professionelle Reinigung für Privat- und Geschäftskunden in{' '}
            {siteConfig.area}.
          </p>
          <ul className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 text-sm font-medium sm:text-base">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check
                  className="text-brand size-5 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button
              href={siteConfig.whatsappLink}
              variant="whatsapp"
              size="lg"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp schreiben
            </Button>
            <Button href="#kontakt" variant="outline" size="lg">
              Kostenloses Angebot{' '}
              <ArrowDown className="size-4" aria-hidden="true" />
            </Button>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-blue-200">
            <Clock3 className="size-4" aria-hidden="true" />
            {siteConfig.availability}
          </p>
        </Reveal>
        <Reveal delay={0.12} className="relative mx-auto w-full max-w-2xl lg:origin-top-right lg:scale-[1.08]">
          <div className="bg-brand/25 absolute -inset-3 rounded-[2rem] blur-2xl" />
          <div className="relative aspect-[2.125/1] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
            <div
              role="img"
              aria-label="BEJA-Reinigungskraft beim Fensterputzen in Frankfurt; Logo und Qualitätsversprechen des Unternehmens"
              className="absolute inset-0 bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-rA5LmzbNRDPD3Ih2seo2iaHFZ5RmFG.png")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </div>
          <div className="text-navy absolute top-5 right-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 text-sm font-semibold shadow-xl sm:right-7">
            <span className="text-brand">24/7</span> erreichbar
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
