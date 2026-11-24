/**
 * src/components/ui/SectionTitle.tsx
 * WHAT: Reusable section heading with optional subtitle and brush-stroke underline.
 *       Used at the top of every major section to introduce its content.
 * USED IN: Services, WhyUs, BeforeAfter, Steps, Contact — any section needing a heading.
 * TOOLS: Tailwind CSS. The brush-underline class is defined in globals.css.
 */

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  eyebrow?: string;
  brushUnderline?: boolean;
  light?: boolean;
  center?: boolean;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  eyebrow,
  brushUnderline = true,
  light = false,
  center = true,
  align,
}: SectionTitleProps) {
  const centered = align ? align === 'center' : center;
  const supportingText = description ?? subtitle;
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p className="text-brand mb-3 text-sm font-semibold tracking-[.15em] uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        className={[
          'font-heading text-3xl leading-tight font-bold', // Base heading style
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
      {supportingText && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${centered ? '' : 'mx-0'} ${light ? 'text-blue-100' : 'text-gray-600'}`}
        >
          {supportingText}
        </p>
      )}
    </div>
  );
}
