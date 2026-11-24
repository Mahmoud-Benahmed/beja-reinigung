/** WHAT: Accessible quote-request fields and send button. USED IN: Contact.tsx. TOOLS: React hook and service data. */
'use client';
import { Send } from 'lucide-react';
import { services } from '@/data/services';
import { useContactForm } from '@/hooks/useContactForm';
import Button from '@/components/ui/Button';

const fieldClass =
  'mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20';

export default function ContactForm() {
  const { status, message, handleSubmit } = useContactForm();

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="text-navy rounded-3xl bg-white p-5 shadow-2xl sm:p-8"
      aria-label="Unverbindliche Anfrage senden"
    >
      <h3 className="text-2xl font-bold">Kostenloses Angebot anfragen</h3>
      <p className="mt-2 text-sm text-slate-600">
        Wir melden uns persönlich bei Ihnen zurück.
      </p>
      <div className="grid gap-4 pt-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Name *
          <input
            className={fieldClass}
            autoComplete="name"
            name="name"
            required
            minLength={2}
            placeholder="Ihr Name"
          />
        </label>
        <label className="text-sm font-semibold">
          Telefon
          <input
            className={fieldClass}
            autoComplete="tel"
            name="phone"
            type="tel"
            placeholder="+49 000 000 0000"
          />
        </label>
        <label className="text-sm font-semibold">
          E-Mail *
          <input
            className={fieldClass}
            autoComplete="email"
            name="email"
            type="email"
            required
            placeholder="name@beispiel.com"
          />
        </label>
        <label className="text-sm font-semibold">
          Leistung *
          <select
            className={fieldClass}
            name="service"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold sm:col-span-2">
          Nachricht *
          <textarea
            className={`${fieldClass} min-h-28 resize-y`}
            name="message"
            required
            minLength={10}
            placeholder="Wobei dürfen wir Sie unterstützen?"
          />
        </label>
        <label className="hidden" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:col-span-2">
          <input
            className="accent-brand mt-1 size-4"
            type="checkbox"
            name="consent"
            required
          />
          <span>
            Ich habe die{' '}
            <a
              className="text-brand font-semibold underline"
              href="/datenschutz"
            >
              Datenschutzhinweise
            </a>{' '}
            gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung
            der Anfrage zu. *
          </span>
        </label>
      </div>
      {message && (
        <p
          role="status"
          className={`mt-4 rounded-xl px-4 py-3 text-sm ${status === 'error' ? 'bg-red-50 text-red-800' : 'bg-emerald-50 text-emerald-800'}`}
        >
          {message}
        </p>
      )}
      <Button
        type="submit"
        disabled={status === 'loading'}
        className="mt-5 w-full"
        size="lg"
      >
        {status === 'loading' ? 'Wird gesendet …' : 'Anfrage senden'}{' '}
        <Send className="size-4" aria-hidden="true" />
      </Button>
      <p className="mt-3 text-xs text-slate-500">
        * Pflichtfelder · Ihre Anfrage ist unverbindlich.
      </p>
    </form>
  );
}
