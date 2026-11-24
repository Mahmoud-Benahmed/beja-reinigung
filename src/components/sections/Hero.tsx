/** WHAT: Main conversion hero. USED IN: app/page.tsx. TOOLS: Image, icons, shared UI. */
import Image from 'next/image';
import { ArrowDown, Check, Clock3, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

const assurances = ['Professionell', 'Zuverlässig', 'Flexibel', 'Faire Preise'];

export default function Hero() {
  return (
    <section className="bg-navy relative overflow-hidden pt-32 pb-16 text-white sm:pt-36 sm:pb-20 lg:min-h-dvh lg:pt-36">
      <div className="bg-brand/20 pointer-events-none absolute -top-32 -right-40 size-[32rem] rounded-full blur-3xl" />
      <Container className="relative grid items-center gap-12 lg:min-h-[calc(100dvh-14rem)] lg:grid-cols-2 lg:gap-16">
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
        <Reveal delay={0.12} className="relative mx-auto w-full max-w-xl">
          <div className="bg-brand/25 absolute -inset-3 rounded-[2rem] blur-2xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
            <Image
              src="/images/owner-hero.png"
              alt="Der Inhaber von BEJA reinigt ein Fenster in Frankfurt"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="text-navy absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-xl sm:left-7">
            <span className="bg-ice text-brand grid size-11 place-items-center rounded-xl">
              <Sparkles aria-hidden="true" />
            </span>
            <span>
              <strong className="block text-sm">Faire Preise</strong>
              <span className="text-xs text-slate-600">
                Transparent & unverbindlich
              </span>
            </span>
          </div>
          <div className="text-navy absolute top-5 right-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 text-sm font-semibold shadow-xl sm:right-7">
            <span className="text-brand">24/7</span> erreichbar
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
