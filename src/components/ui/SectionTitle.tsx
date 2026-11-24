/**
 * src/components/ui/SectionTitle.tsx
 * WHAT: Reusable section heading with optional subtitle and brush-stroke underline.
 *       Used at the top of every major section to introduce its content.
 * USED IN: Services, WhyUs, BeforeAfter, Steps, Contact — any section needing a heading.
 * TOOLS: Tailwind CSS. The brush-underline class is defined in globals.css.
 */

interface SectionTitleProps {
  title: string; // The main heading text (always German)
  subtitle?: string; // Optional paragraph below the heading
  brushUnderline?: boolean; // Show the blue brush-stroke underline effect
  light?: boolean; // Use white text (for dark/navy background sections)
  center?: boolean; // Center the text (default true)
}

export default function SectionTitle({
  title,
  subtitle,
  brushUnderline = false,
  light = false,
  center = true,
}: SectionTitleProps) {
  return (
    // text-center by default; switch to text-left if center=false
    <div className={`mb-10 ${center ? 'text-center' : 'text-left'}`}>
      <h2
        className={[
          'font-heading text-3xl font-bold leading-tight', // Base heading style
          'md:text-4xl', // Larger on tablet and up
          light ? 'text-white' : 'text-navy', // White on dark sections, navy on light
          brushUnderline ? 'brush-underline' : '', // Apply the brush underline from globals.css
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title}
      </h2>

      {/* Only render the subtitle if it was provided (subtitle is optional) */}
      {subtitle && (
        <p
          className={[
            'mt-4 text-lg leading-relaxed max-w-2xl', // Limit width for readability
            center ? 'mx-auto' : '', // Center the max-width block when text is centered
            light ? 'text-blue-100' : 'text-gray-600', // Lighter text on dark sections
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
