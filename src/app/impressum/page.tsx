/** WHAT: Clearly marked Impressum content awaiting owner details. USED IN: /impressum. TOOLS: Next and shared layout. */
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/lib/site';

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ice min-h-dvh px-4 pt-32 pb-20">
        <Container className="max-w-3xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-brand font-semibold">
            BITTE VOR VERÖFFENTLICHUNG AUSFÜLLEN
          </p>
          <h1 className="text-navy mt-3 text-4xl font-bold">Impressum</h1>
          <p className="mt-4 leading-7 text-slate-600">
            Diese Seite enthält noch Platzhalter und ist kein vollständiges
            Impressum. Angaben durch den Betreiber ergänzen lassen.
          </p>
          <dl className="mt-8 space-y-5 text-slate-700">
            <div>
              <dt className="font-bold">Angaben gemäß § 5 DDG</dt>
              <dd className="mt-1">
                {siteConfig.name}
                <br />
                [Vollständige Anschrift ergänzen]
              </dd>
            </div>
            <div>
              <dt className="font-bold">Vertreten durch</dt>
              <dd>[Name der Inhaberin / des Inhabers ergänzen]</dd>
            </div>
            <div>
              <dt className="font-bold">Kontakt</dt>
              <dd>
                Telefon: {siteConfig.whatsappNumber}
                <br />
                E-Mail: {siteConfig.email}
              </dd>
            </div>
            <div>
              <dt className="font-bold">Umsatzsteuer-ID</dt>
              <dd>
                [Falls vorhanden: Umsatzsteuer-Identifikationsnummer ergänzen]
              </dd>
            </div>
          </dl>
          <p className="bg-ice mt-8 rounded-xl p-4 text-sm leading-6 text-slate-700">
            Vor Veröffentlichung mit einem geeigneten Rechtsgenerator, zum
            Beispiel e-recht24.de, vervollständigen und prüfen lassen.
          </p>
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
