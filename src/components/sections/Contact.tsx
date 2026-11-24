/** WHAT: Contact details beside the request form. USED IN: app/page.tsx. TOOLS: business data and contact links. */
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/sections/ContactForm';

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="bg-navy scroll-mt-28 py-20 text-white sm:py-24"
    >
      <Container className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold tracking-[.15em] text-blue-200 uppercase">
            Kontakt
          </p>
          <h2 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
            Lassen Sie uns für Glanz sorgen.
          </h2>
          <p className="mt-5 text-lg leading-8 text-blue-100">
            Kontaktieren Sie uns noch heute und sichern Sie sich Ihr
            unverbindliches Angebot. Wir freuen uns auf Ihre Anfrage!
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a
              className="focus-visible:ring-brand flex min-h-16 items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:outline-none"
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle
                className="text-whatsapp size-6 shrink-0"
                aria-hidden="true"
              />
              <span>
                <strong className="block">WhatsApp</strong>
                <span className="text-sm text-blue-100">
                  {siteConfig.whatsappNumber}
                </span>
              </span>
            </a>
            <a
              className="focus-visible:ring-brand flex min-h-16 items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:outline-none"
              href={`mailto:${siteConfig.email}`}
            >
              <Mail className="text-brand size-6 shrink-0" aria-hidden="true" />
              <span>
                <strong className="block">E-Mail</strong>
                <span className="text-sm text-blue-100">
                  {siteConfig.email}
                </span>
              </span>
            </a>
            <div className="flex min-h-16 items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 sm:col-span-2 lg:col-span-1">
              <MapPin
                className="text-brand size-6 shrink-0"
                aria-hidden="true"
              />
              <span>
                <strong className="block">Einsatzgebiet</strong>
                <span className="text-sm text-blue-100">{siteConfig.area}</span>
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
