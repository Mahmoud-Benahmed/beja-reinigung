# BEJA Gebäudereinigung

A mobile-first German brochure website for BEJA Gebäudereinigung in Frankfurt am Main. The site is a static Next.js app; quote requests are sent from the browser through EmailJS. There is no database or custom backend.

## Local setup

1. Install Node.js (24 recommended) and clone the repository.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to `.env.local` and set the EmailJS values below.
4. Start the development server with `npm run dev`, then open http://localhost:3000.
5. Check quality with `npm run lint` and `npm run build`.

## EmailJS setup

Create an EmailJS service connected to the business inbox, then create a template with `{{name}}`, `{{phone}}`, `{{email}}`, `{{service}}`, and `{{message}}`. Put the matching Service ID, Template ID, and public key into `.env.local` as `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`. The public key is intended for browser use; restrict allowed origins to the deployed site in the EmailJS dashboard. Add the same three values in Vercel Project Settings → Environment Variables. The form checks required fields, includes a hidden honeypot, and displays success/error feedback.

## Business details

Update the phone, WhatsApp link, email, area, slogans, SEO copy, and company name only in `src/lib/site.ts`. Confirm the real WhatsApp number and email before publishing; current values are placeholders.

## Images and logo

Replace the images in `public/images/` while keeping the same filenames and aspect ratios. The hero uses `hero-worker.jpg`; other photos are used for service, location, and comparison sections. Replace `public/logo.svg` and `public/og-image.jpg` when final brand assets are ready. The supplied poster is a visual reference, not used as a text source.

## Legal pages

`/impressum` and `/datenschutz` are marked placeholders, not complete legal advice. The owner must replace and verify both pages using a suitable legal text generator such as e-recht24.de before launch; do not publish the placeholders as final legal notices.

## Deploy on Vercel

Import the GitHub repository into Vercel using the Next.js preset. Add the three EmailJS environment variables to the desired environments, deploy, then test the WhatsApp link and form on a real phone. Restrict the EmailJS allowed domain to the Vercel deployment URL. Update `seoUrl` in `src/lib/site.ts` if the final Vercel URL differs from the current placeholder.
