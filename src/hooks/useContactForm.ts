/** WHAT: Holds form validation and EmailJS submission. USED IN: ContactForm.tsx. TOOLS: React state and EmailJS helper. */
'use client';
import { useState, type FormEvent } from 'react';
import { sendEmail } from '@/lib/emailjs';
import type { FormStatus } from '@/types';

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Set clear German messages before asking the browser to validate the form.
    const name = form.elements.namedItem('name');
    if (name instanceof HTMLInputElement)
      name.setCustomValidity(
        name.value.trim().length >= 2 ? '' : 'Bitte geben Sie Ihren Namen ein.',
      );
    const email = form.elements.namedItem('email');
    if (email instanceof HTMLInputElement) {
      // Clear the previous custom error first so a corrected address can pass.
      email.setCustomValidity('');
      const emailIsValid =
        email.value.trim().length > 0 && email.validity.valid;
      email.setCustomValidity(
        emailIsValid ? '' : 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      );
    }
    const service = form.elements.namedItem('service');
    if (service instanceof HTMLSelectElement)
      service.setCustomValidity(
        service.value ? '' : 'Bitte wählen Sie eine Leistung aus.',
      );
    const details = form.elements.namedItem('message');
    if (details instanceof HTMLTextAreaElement)
      details.setCustomValidity(
        details.value.trim().length >= 10
          ? ''
          : 'Bitte beschreiben Sie Ihr Anliegen (mindestens 10 Zeichen).',
      );
    const consent = form.elements.namedItem('consent');
    if (consent instanceof HTMLInputElement)
      consent.setCustomValidity(
        consent.checked ? '' : 'Bitte stimmen Sie den Datenschutzhinweisen zu.',
      );
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    // A filled honeypot usually means an automated bot, so do not send it.
    if (String(values.get('website') ?? '')) return;
    setStatus('loading');
    setMessage('');

    try {
      await sendEmail({
        name: String(values.get('name') ?? '').trim(),
        phone: String(values.get('phone') ?? '').trim(),
        email: String(values.get('email') ?? '').trim(),
        service: String(values.get('service') ?? ''),
        message: String(values.get('message') ?? '').trim(),
        consent: values.get('consent') === 'on',
        honeypot: '',
      });
      form.reset();
      setStatus('success');
      setMessage(
        'Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns schnellstmöglich.',
      );
    } catch {
      setStatus('error');
      setMessage(
        'Das hat leider nicht funktioniert. Schreiben Sie uns bitte direkt per WhatsApp oder E-Mail.',
      );
    }
  }

  return { status, message, handleSubmit };
}
