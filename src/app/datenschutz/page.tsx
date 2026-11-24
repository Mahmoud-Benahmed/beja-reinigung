/** WHAT: Clearly marked Datenschutz placeholder. USED IN: /datenschutz. TOOLS: shared layout and business data. */
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/lib/site';

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ice min-h-dvh px-4 pt-32 pb-20">
        <Container className="max-w-3xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-brand font-semibold">
            BITTE VOR VERÖFFENTLICHUNG AUSFÜLLEN
          </p>
          <h1 className="text-navy mt-3 text-4xl font-bold">
            Datenschutzhinweise
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            Diese Seite ist ein Platzhalter und stellt keine vollständige
            Datenschutzerklärung dar. Die konkreten Verarbeitungsvorgänge müssen
            vom Betreiber geprüft und ergänzt werden.
          </p>
          <div className="mt-8 space-y-5 text-slate-700">
            <section>
              <h2 className="text-navy text-xl font-bold">
                Verantwortliche Stelle
              </h2>
              <p className="mt-2">
                {siteConfig.name}
                <br />
                [Vollständige Anschrift ergänzen]
                <br />
                E-Mail: {siteConfig.email}
              </p>
            </section>
            <section>
              <h2 className="text-navy text-xl font-bold">
                Kontaktformular und E-Mail-Versand
              </h2>
              <p className="mt-2">
                Vor Veröffentlichung den tatsächlichen Anbieter, Zweck,
                Rechtsgrundlage, Speicherfristen und Empfänger (einschließlich
                EmailJS) beschreiben.
              </p>
            </section>
            <section>
              <h2 className="text-navy text-xl font-bold">Ihre Rechte</h2>
              <p className="mt-2">
                Die geltenden Betroffenenrechte und zuständigen
                Aufsichtsbehörden müssen anhand der tatsächlichen Situation
                ergänzt werden.
              </p>
            </section>
          </div>
          <p className="bg-ice mt-8 rounded-xl p-4 text-sm leading-6 text-slate-700">
            Vor Veröffentlichung mit einem geeigneten Rechtsgenerator, zum
            Beispiel e-recht24.de, vervollständigen und prüfen lassen. Keine
            rechtlichen Texte ungeprüft übernehmen.
          </p>
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
