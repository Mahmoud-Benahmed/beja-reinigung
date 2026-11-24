/**
 * src/lib/emailjs.ts
 * WHAT: EmailJS configuration and the sendEmail() function.
 *       Handles sending contact form data to the owner's inbox — no backend needed.
 * USED IN: src/components/sections/Contact.tsx (the contact form submit handler).
 * TOOLS: @emailjs/browser — sends emails directly from the browser via the EmailJS API.
 *
 * HOW EMAILJS WORKS (step by step):
 * 1. Sign up at https://emailjs.com (free — 200 emails/month).
 * 2. Create a "Service" (connect your Gmail, Outlook, etc.).
 * 3. Create an "Email Template" using {{variable_name}} placeholders.
 * 4. Copy your Service ID, Template ID, and Public Key.
 * 5. Add them as environment variables (see .env.example).
 * 6. This code sends form data → EmailJS servers → owner's inbox.
 *
 * SECURITY NOTE:
 * The Public Key IS safe to expose in the browser — that is by design.
 * After deployment, restrict it to your Vercel domain in the EmailJS dashboard
 * to prevent abuse from other websites.
 */

import emailjs from '@emailjs/browser';
import type { ContactFormData } from '@/types';

// Read EmailJS credentials from environment variables.
// NEXT_PUBLIC_ prefix means Next.js will include these in the browser bundle.
// Set them in Vercel dashboard → Settings → Environment Variables.
// For local development, copy .env.example to .env.local and fill in the values.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

/**
 * sendEmail
 * Takes validated form data and sends it via EmailJS.
 *
 * Template variables (must match your EmailJS template exactly):
 * {{name}}, {{phone}}, {{email}}, {{service}}, {{message}}
 *
 * @param data - The validated contact form field values
 * @returns A Promise that resolves on success, rejects on failure
 */
export async function sendEmail(data: ContactFormData): Promise<void> {
  // Map our form fields to the variable names in the EmailJS email template.
  // The keys here (name, phone, email, service, message) must match
  // the {{variable_name}} placeholders you created in your EmailJS template.
  const templateParams = {
    name: data.name,
    phone: data.phone || 'Nicht angegeben', // Fallback if phone was left empty
    email: data.email,
    service: data.service,
    message: data.message,
  };

  // emailjs.send() makes an HTTPS request to EmailJS servers.
  // If the credentials are wrong or the quota is exceeded, it throws an error.
  // The calling component (Contact.tsx) catches that error and shows an error message.
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
