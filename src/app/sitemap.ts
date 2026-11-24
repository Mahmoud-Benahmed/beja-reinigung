/** WHAT: Generates the site's XML sitemap. USED IN: Next metadata route /sitemap.xml. TOOLS: Next MetadataRoute. */
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/impressum', '/datenschutz'].map((path) => ({
    url: new URL(path, siteConfig.seoUrl).toString(),
    lastModified: '2026-11-24',
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.3,
  }));
}
