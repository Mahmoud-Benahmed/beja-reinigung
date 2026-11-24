/** WHAT: Route-specific metadata for the legal notice. USED IN: /impressum. TOOLS: Next Metadata. */
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Impressum | BEJA Gebäudereinigung',
  robots: { index: false, follow: true },
};
export default function ImpressumLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
