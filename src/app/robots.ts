/** WHAT: Publishes crawler access rules. USED IN: Next metadata route /robots.txt. TOOLS: Next MetadataRoute. */
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', siteConfig.seoUrl).toString(),
  };
}
