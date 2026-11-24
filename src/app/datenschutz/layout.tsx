/** WHAT: Route-specific metadata for privacy information. USED IN: /datenschutz. TOOLS: Next Metadata. */
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Datenschutz | BEJA Gebäudereinigung',
  robots: { index: false, follow: true },
};
export default function DatenschutzLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
