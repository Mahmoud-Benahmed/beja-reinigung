# Project architecture

## Folder guide

- `src/app/`: App Router layout, homepage, legal routes, sitemap, and crawler rules.
- `src/components/layout/`: shared navigation, footer, and floating WhatsApp action.
- `src/components/sections/`: one component per homepage section; `BeforeAfter` and `Contact` are client components because they need interactive state.
- `src/components/ui/`: shared buttons, section headings, reveal animation, container, and service cards.
- `src/data/`: service, reason, navigation, and booking-step content.
- `src/lib/`: business settings, EmailJS sending, and small helpers.
- `src/types/`: shared TypeScript shapes.
- `public/images/`: replaceable photography; `public/logo.svg` and `public/og-image.jpg` are brand assets.

## Page request flow

A request enters `src/app/layout.tsx`, which sets German-language metadata, font variables, and site-wide styles. The App Router then renders `src/app/page.tsx`, which assembles Navbar, Hero, TrustStrip, Services, WhyUs, BeforeAfter, Area, Steps, Contact, Footer, and the floating WhatsApp button in order. Most components render on the server; the menu, reveal animation, comparison slider, and form hydrate only where interaction is needed.

## Contact request flow

A visitor fills in the form in `src/components/sections/Contact.tsx`. Browser validation checks required fields and minimum lengths. A hidden website field catches simple bots; submissions that fill it are ignored. Valid values are mapped to the typed EmailJS data and passed to `sendEmail()` in `src/lib/emailjs.ts`. That function sends the `name`, `phone`, `email`, `service`, and `message` template values using public environment variables. The form shows a loading state during the request, then a German success or error message. EmailJS sends directly from the browser; no application server stores the request.

## Before/after interaction

Each comparison has an accessible range input from 0 to 100. Changing it updates a React state value. The clean image is clipped to that percentage over the unclean image, while the divider follows the same value. Native range controls support mouse, touch, and keyboard input.

## Where to edit

- Company name, logo name, phone, WhatsApp URL, email, area, availability, and SEO values: `src/lib/site.ts`.
- Services: `src/data/services.ts` (also drives the form dropdown).
- Reasons, steps, and navigation: the matching files in `src/data/`.
- Brand colors, fonts, base styles, and motion preferences: `src/app/globals.css` and `src/app/layout.tsx`.
- Photos: replace files in `public/images/`, retaining their filenames and dimensions.
- Logo and social preview: `public/logo.svg` and `public/og-image.jpg`.
- Email delivery: set the three `NEXT_PUBLIC_EMAILJS_*` variables in `.env.local` and Vercel.

## Glossary

- **Component:** a reusable piece of a page, such as a button or section.
- **Props:** values passed from a parent component to a child component.
- **State:** changing information kept by an interactive component, such as the slider position.
- **Hook:** a React function that gives a component access to features such as state or browser events.
- **App Router:** Next.js's file-based routing system inside `src/app/`.
- **Tailwind class:** a small utility class that applies a style, such as spacing or color, directly to an element.
