/**
 * src/components/ui/ServiceCard.tsx
 * WHAT: A single cleaning service card showing an icon, title, and description.
 *       Featured cards (first 3 services) have extra padding and a larger icon.
 * USED IN: src/components/sections/Services.tsx — rendered for each service in the list.
 * TOOLS: lucide-react for icons, Tailwind CSS for the card design.
 *
 * DESIGN DETAILS:
 * - White card on the ice-blue section background
 * - rounded-2xl: rounded corners matching the brand style
 * - hover:-translate-y-1: a subtle "lift" effect on hover
 * - group: enables hover: variants on child elements
 */

import Image from 'next/image';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service; // The service data object from services.ts
  featured?: boolean; // If true, renders with more padding and larger icon
}

export default function ServiceCard({
  service,
  featured = false,
}: ServiceCardProps) {
  // Get the icon component from the service object
  // LucideIcon is a React component, so we capitalize it to use as JSX
  const Icon = service.icon;

  return (
    <div
      className={[
        'group', // Enables CSS group-hover: on child elements
        'overflow-hidden rounded-2xl', // Clips service photography to rounded corners
        'bg-white', // White card on the ice background
        'shadow-md', // Soft shadow for depth / card effect
        'border border-blue-50', // Very subtle blue border
        'p-6', // Inner padding
        'transition-all duration-300', // Smooth hover transitions
        'hover:shadow-xl', // Larger shadow on hover — creates the "lift" effect
        'hover:-translate-y-1', // Move up 4px on hover — reinforces the lift
        featured ? 'md:p-8' : '', // Extra padding for featured cards on desktop
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {service.image && (
        <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/9] overflow-hidden md:-mx-8 md:-mt-8">
          <Image
            src={service.image}
            alt={service.imageAlt ?? ''}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      {/* Icon circle: brand blue background, centered icon */}
      <div
        className={[
          'mb-4 inline-flex items-center justify-center',
          'bg-ice rounded-full', // Ice blue circle background
          featured ? 'h-16 w-16' : 'h-12 w-12', // Larger circle for featured cards
        ].join(' ')}
      >
        {/* aria-hidden: the icon is decorative — the title provides the text meaning */}
        <Icon
          className={`text-brand ${featured ? 'h-8 w-8' : 'h-6 w-6'}`}
          aria-hidden="true"
        />
      </div>

      {/* Service title */}
      <h3
        className={[
          'font-heading text-navy mb-2 font-semibold',
          featured ? 'text-xl' : 'text-base', // Featured cards get a larger title
        ].join(' ')}
      >
        {service.title}
      </h3>

      {/* Service description / tagline */}
      <p className="text-sm leading-relaxed text-gray-600">
        {service.description}
      </p>
    </div>
  );
}
