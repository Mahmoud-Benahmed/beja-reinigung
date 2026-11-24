/** WHAT: Shared root layout and SEO metadata. USED IN: every route. TOOLS: Next metadata and Google fonts. */
import type { Metadata, Viewport } from 'next';
import { Caveat, Inter, Poppins } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const caveat = Caveat({ variable: '--font-caveat', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seoUrl),
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  applicationName: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: '/',
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'BEJA Gebäudereinigung in Frankfurt am Main',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    images: [siteConfig.ogImage],
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0B1F4B',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    name: siteConfig.name,
    description: siteConfig.seoDescription,
    areaServed: { '@type': 'City', name: 'Frankfurt am Main' },
    telephone: siteConfig.whatsappNumber,
    email: siteConfig.email,
    url: siteConfig.seoUrl,
  };
  return (
    <html
      lang="de"
      className={`${poppins.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="font-body min-h-full text-slate-800">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  );
}
