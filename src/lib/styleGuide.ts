/**
 * Style Guide registry.
 *
 * Source of truth for *what* shows up on /style-guide.
 * The values themselves live in src/app/globals.css (@theme block).
 *
 * Adding a new token? List its variable name here. The page reads the
 * resolved value from CSS at runtime, so you never duplicate values.
 *
 * Renaming or removing a token? Update both globals.css and this file.
 */

export interface TokenEntry {
  /** CSS custom property name, e.g. "--color-mdc-blue" */
  name: string;
  /** Tailwind utility this token is exposed as, e.g. "bg-mdc-blue" */
  utility?: string;
  /** Short human description for the dev handoff */
  description?: string;
}

export interface TokenGroup {
  id: string;
  title: string;
  description?: string;
  tokens: TokenEntry[];
}

export const colorGroups: TokenGroup[] = [
  {
    id: "brand",
    title: "Brand — MDC Blue",
    description:
      "Primary identity colors. Use mdc-blue for accents, badges, and hover states; mdc-blue-dark for the manifesto/CTA backgrounds; mdc-blue-light only for soft tinted backgrounds.",
    tokens: [
      { name: "--color-mdc-blue", utility: "bg-mdc-blue / text-mdc-blue", description: "Primary brand color." },
      { name: "--color-mdc-blue-dark", utility: "bg-mdc-blue-dark", description: "Deep navy backdrop for the manifesto section." },
      { name: "--color-mdc-blue-light", utility: "bg-mdc-blue-light", description: "Soft blue tint for callouts." },
      { name: "--color-accent", utility: "bg-accent / text-accent", description: "Alias of mdc-blue. Used by interactive elements." },
      { name: "--color-accent-hover", utility: "hover:bg-accent-hover", description: "Pressed/hover state for accent surfaces." },
    ],
  },
  {
    id: "neutrals",
    title: "Neutrals",
    description: "Body copy, surfaces, dividers. Charcoal is the default text color; stone is the secondary surface.",
    tokens: [
      { name: "--color-charcoal", utility: "text-charcoal", description: "Primary text and dark surfaces." },
      { name: "--color-charcoal-light", utility: "text-charcoal-light", description: "Secondary text, captions, meta." },
      { name: "--color-navy", utility: "bg-navy", description: "Almost-black backdrop for cards on dark sections." },
      { name: "--color-navy-light", utility: "bg-navy-light", description: "Slightly lifted dark surface for cards." },
      { name: "--color-stone", utility: "bg-stone", description: "Light section backgrounds." },
      { name: "--color-stone-dark", utility: "bg-stone-dark", description: "Hover state for stone surfaces." },
      { name: "--color-gray-50", utility: "bg-gray-50", description: "Lightest neutral wash." },
      { name: "--color-white", utility: "bg-white", description: "Surface white." },
    ],
  },
  {
    id: "alpha",
    title: "Alpha & Borders",
    description: "Translucent tokens. Use these instead of writing rgba() inline.",
    tokens: [
      { name: "--color-warm-gray", description: "85% white — body text on dark backgrounds." },
      { name: "--color-warm-muted", description: "50% white — meta text on dark backgrounds." },
      { name: "--color-navy-border", description: "15% white — divider on dark." },
      { name: "--color-border", description: "10% black — default border on light surfaces." },
      { name: "--color-border-hover", description: "20% black — hover border on light surfaces." },
    ],
  },
];

export const radiusTokens: TokenEntry[] = [
  { name: "--radius-sm", utility: "rounded-radius-sm", description: "Pills, small buttons, icon containers (6px)." },
  { name: "--radius-md", utility: "rounded-radius-md", description: "Inputs, secondary cards (12px)." },
  { name: "--radius-lg", utility: "rounded-radius-lg", description: "Cards, callouts, testimonials (14px)." },
  { name: "--radius-xl", utility: "rounded-radius-xl", description: "Large media containers (20px)." },
];

export const shadowTokens: TokenEntry[] = [
  { name: "--shadow-xs", utility: "shadow-xs", description: "Subtle separation — used on hover states only." },
  { name: "--shadow-sm", utility: "shadow-sm", description: "Default elevation for pill buttons." },
  { name: "--shadow-md", utility: "shadow-md", description: "Hover elevation for buttons & cards." },
  { name: "--shadow-lg", utility: "shadow-lg", description: "Modal-like surfaces (rare in this app)." },
  { name: "--shadow-xl", utility: "shadow-xl", description: "Highest elevation, reserved." },
];

export const motionTokens: TokenEntry[] = [
  { name: "--duration-fast", description: "150ms — micro-interactions, hover color shifts." },
  { name: "--duration-normal", description: "250ms — standard transitions." },
  { name: "--duration-slow", description: "350ms — large surface transitions." },
  { name: "--ease-spring", description: "Springy overshoot. Use sparingly for delight." },
  { name: "--ease-out-smooth", description: "Default for entrances (used by ScrollReveal & ImageHero)." },
  { name: "--ease-snappy", description: "Tight, mechanical. Default for hover/state changes." },
];

export const fontTokens: TokenEntry[] = [
  { name: "--font-sans", utility: "font-sans", description: "Instrument Sans — body, UI, and display headlines." },
  { name: "--font-heading", utility: "font-heading", description: "Instrument Serif — italic flourishes and editorial accents." },
  { name: "--font-mono", utility: "font-mono", description: "Geist Mono — code, numbers, technical labels." },
];

export interface TypeSpec {
  label: string;
  className: string;
  inlineStyle?: React.CSSProperties;
  sample: string;
  usage: string;
}

export const typeScale: TypeSpec[] = [
  {
    label: "Hero / H1",
    className: "font-sans font-bold leading-[1.05] tracking-[-0.02em]",
    inlineStyle: { fontSize: "clamp(2.5rem, 5vw + 1rem, 4.5rem)" },
    sample: "Working at MDC",
    usage: "ImageHero only. One per page.",
  },
  {
    label: "Display / Manifesto",
    className: "font-sans font-bold uppercase leading-[1.1] tracking-[-0.02em]",
    inlineStyle: { fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5.5rem)" },
    sample: "We exist to lift lives.",
    usage: "ManifestoSection. Always uppercase, always bold.",
  },
  {
    label: "Section / H2",
    className: "font-sans font-bold leading-[1.1] tracking-[-0.02em]",
    inlineStyle: { fontSize: "clamp(1.75rem, 3vw + 0.5rem, 3rem)" },
    sample: "Why people stay",
    usage: "SectionTitle. The default page-section heading.",
  },
  {
    label: "Editorial / H2 uppercase",
    className: "font-sans font-bold uppercase leading-[1.1] tracking-[-0.02em]",
    inlineStyle: { fontSize: "clamp(2rem, 4vw, 3.5rem)" },
    sample: "Built for educators",
    usage: "ImageTextBlock and ImageCardCarousel headlines.",
  },
  {
    label: "Card title / H3",
    className: "font-heading font-medium text-xl leading-[1.2] tracking-[-0.01em]",
    sample: "Tuition assistance",
    usage: "Card component titles.",
  },
  {
    label: "Numbered card / H3",
    className: "font-heading font-semibold text-2xl md:text-[2rem] leading-[1.1] tracking-[-0.02em]",
    sample: "Apply for the role",
    usage: "NumberedCard titles only.",
  },
  {
    label: "Lead paragraph",
    className: "text-lg leading-relaxed tracking-[-0.01em]",
    sample:
      "Miami Dade College has been transforming lives for over six decades. Our employees are the reason why.",
    usage: "Subtitles under SectionTitle.",
  },
  {
    label: "Body",
    className: "text-base leading-[1.6] tracking-[0.01em]",
    sample:
      "Generous benefits, real career growth, and a community committed to student success.",
    usage: "Default paragraph text inside cards and blocks.",
  },
  {
    label: "Body small",
    className: "text-sm leading-[1.6] tracking-[0.01em]",
    sample: "Card description copy lives here.",
    usage: "Card and InfoCallout descriptions.",
  },
  {
    label: "Eyebrow / Label",
    className: "text-xs font-medium uppercase tracking-[0.1em] text-charcoal-light",
    sample: "OUR FOCUS",
    usage: "Pre-headline label above SectionTitle.",
  },
  {
    label: "Italic flourish",
    className: "font-heading italic text-xl leading-[1.5] tracking-[-0.01em]",
    sample: "A place where what you do truly matters.",
    usage: "ImageHero subtitles only. Never use serif italic for body copy.",
  },
];

export interface ComponentSpec {
  name: string;
  importPath: string;
  description: string;
  props: { name: string; type: string; required?: boolean; description: string }[];
}

export const componentSpecs: ComponentSpec[] = [
  {
    name: "CTAButton",
    importPath: "@/components/ui/CTAButton",
    description: "Pill-shaped button. The primary call-to-action across the site.",
    props: [
      { name: "label", type: "string", required: true, description: "Visible button text." },
      { name: "href", type: "string", required: true, description: "Target URL or path." },
      { name: "variant", type: '"accent" | "white" | "dark" | "outline" | "outline-light"', description: "Visual style. Defaults to accent." },
      { name: "external", type: "boolean", description: "Adds external icon, opens in new tab, includes sr-only label." },
      { name: "showArrow", type: "boolean", description: "Appends a right-arrow icon." },
      { name: "className", type: "string", description: "Escape hatch for layout adjustments." },
    ],
  },
  {
    name: "SectionTitle",
    importPath: "@/components/ui/SectionTitle",
    description: "Standard heading block at the top of a page section. Includes optional eyebrow badge and subtitle.",
    props: [
      { name: "title", type: "string", required: true, description: "The heading copy." },
      { name: "subtitle", type: "string", description: "Lead paragraph below the heading." },
      { name: "badge", type: "string", description: "Eyebrow text — automatically uppercased." },
      { name: "align", type: '"left" | "center"', description: "Text alignment. Defaults to center." },
      { name: "theme", type: '"dark" | "light"', description: "Light text on dark backgrounds, vice versa. Defaults to dark text." },
    ],
  },
  {
    name: "Card",
    importPath: "@/components/ui/Card",
    description: "Generic content card. Supports a leading icon, optional link, light or dark theme.",
    props: [
      { name: "title", type: "string", required: true, description: "Card heading." },
      { name: "description", type: "string", required: true, description: "Card body copy." },
      { name: "icon", type: "LucideIcon", description: "Optional Lucide icon component." },
      { name: "href", type: "string", description: "Makes the entire card a link. External URLs open in a new tab." },
      { name: "theme", type: '"dark" | "light"', description: "Use dark on dark sections, light on stone/white. Defaults to dark." },
      { name: "delay", type: "number", description: "Stagger delay (seconds) for the ScrollReveal animation." },
    ],
  },
  {
    name: "InfoCallout",
    importPath: "@/components/ui/InfoCallout",
    description: "Supporting content block. Three variants: highlight (icon + body), stat (large number), quote (testimonial).",
    props: [
      { name: "variant", type: '"highlight" | "stat" | "quote"', description: "Layout mode. Defaults to highlight." },
      { name: "title", type: "string", description: "Heading. Highlight + stat variants." },
      { name: "text", type: "string", required: true, description: "Body or quote text." },
      { name: "stat", type: "string", description: "Large numeric display. Stat variant only." },
      { name: "attribution", type: "string", description: "Author. Quote variant only." },
      { name: "icon", type: "LucideIcon", description: "Leading icon. Highlight variant only." },
      { name: "theme", type: '"dark" | "light"', description: "Surface theme. Defaults to light." },
    ],
  },
  {
    name: "NumberedCard",
    importPath: "@/components/ui/NumberedCard",
    description: "Step or sequence card. Large faded numeral above heading and body.",
    props: [
      { name: "number", type: "string", required: true, description: 'Display numeral, e.g. "01".' },
      { name: "title", type: "string", required: true, description: "Step heading." },
      { name: "description", type: "string", required: true, description: "Step body copy." },
      { name: "delay", type: "number", description: "Stagger delay for the entrance animation." },
    ],
  },
  {
    name: "TestimonialCard",
    importPath: "@/components/ui/TestimonialCard",
    description: "Photo-led testimonial with overlapping quote card.",
    props: [
      { name: "quote", type: "string", required: true, description: "Quote body." },
      { name: "name", type: "string", required: true, description: "Speaker name." },
      { name: "role", type: "string", required: true, description: "Speaker role/title." },
      { name: "variant", type: '"white" | "accent"', description: 'Surface color. Use "accent" sparingly. Defaults to white.' },
      { name: "delay", type: "number", description: "Stagger delay for the entrance animation." },
    ],
  },
  {
    name: "ImageHero",
    importPath: "@/components/ui/ImageHero",
    description: "Full-bleed page hero. One per page, always at the top.",
    props: [
      { name: "image", type: "string", required: true, description: "Hero image URL. Use a dense, editorial photograph." },
      { name: "headline", type: "string", required: true, description: "H1 copy." },
      { name: "subtitle", type: "string", description: "Italic serif subtitle below the headline." },
      { name: "badge", type: "string", description: "Tiny label above the headline." },
      { name: "overlay", type: '"dark" | "brand"', description: 'Gradient flavor. "brand" tints toward mdc-blue. Defaults to brand.' },
      { name: "children", type: "ReactNode", description: "CTA buttons render below the subtitle." },
    ],
  },
  {
    name: "ManifestoSection",
    importPath: "@/components/ui/ManifestoSection",
    description: "Dramatic full-width statement on a deep blue background. Use once per page max.",
    props: [
      { name: "headline", type: "string", required: true, description: "All-caps statement." },
      { name: "body", type: "string", required: true, description: "Supporting copy in the right column." },
    ],
  },
  {
    name: "ImageTextBlock",
    importPath: "@/components/ui/ImageTextBlock",
    description: "Editorial image-and-text pair. Alternate the reverse prop down a page for rhythm.",
    props: [
      { name: "image", type: "string", required: true, description: "Image URL. 4:3 aspect renders best." },
      { name: "label", type: "string", required: true, description: "Eyebrow label." },
      { name: "headline", type: "string", required: true, description: "Section headline (uppercase)." },
      { name: "body", type: "string", required: true, description: "Body paragraph." },
      { name: "ctaLabel", type: "string", description: "Optional CTA button label." },
      { name: "ctaHref", type: "string", description: "Optional CTA target." },
      { name: "ctaExternal", type: "boolean", description: "Treat ctaHref as an external link." },
      { name: "reverse", type: "boolean", description: "Flips image to the right on desktop." },
    ],
  },
  {
    name: "ImageCardCarousel",
    importPath: "@/components/ui/ImageCardCarousel",
    description: "Horizontal scrolling row of image cards with paginating arrows.",
    props: [
      { name: "label", type: "string", required: true, description: "Eyebrow label above the headline." },
      { name: "headline", type: "string", required: true, description: "Section headline (uppercase)." },
      { name: "cards", type: "{ image: string; title: string; href?: string }[]", required: true, description: "Card data. Provide href to make a card linkable." },
    ],
  },
  {
    name: "ScrollReveal",
    importPath: "@/components/ui/ScrollReveal",
    description: "Wrap any element to fade-and-rise it into view as the user scrolls. The default animation primitive.",
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Element to animate." },
      { name: "delay", type: "number", description: "Seconds to delay. Use 0.05–0.15 increments to stagger groups." },
      { name: "direction", type: '"up" | "down" | "left" | "right"', description: "Entrance direction. Defaults to up." },
      { name: "distance", type: "number", description: "Pixels traveled. Defaults to 40." },
    ],
  },
];
