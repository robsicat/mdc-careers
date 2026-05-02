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
      "Primary identity colors. Use mdc-blue for manifesto/CTA backgrounds; mdc-blue-light for soft tinted backgrounds.",
    tokens: [
      { name: "--color-mdc-blue", utility: "bg-mdc-blue / text-mdc-blue", description: "Primary brand color (#003B71)." },
      { name: "--color-mdc-blue-dark", utility: "bg-mdc-blue-dark", description: "Deep navy backdrop (#002A54)." },
      { name: "--color-mdc-blue-light", utility: "bg-mdc-blue-light", description: "Soft blue tint for callouts (#E8F0F8)." },
      { name: "--color-accent", utility: "bg-accent / text-accent", description: "Alias of mdc-blue. Used by interactive elements." },
      { name: "--color-accent-hover", utility: "hover:bg-accent-hover", description: "Pressed/hover state for accent surfaces." },
    ],
  },
  {
    id: "pop",
    title: "Pop — Vibrant Accents",
    description:
      "Personality colors used sparingly for icon backgrounds, dot indicators, quote marks, gradient orbs, and interactive highlights. Never used for large surfaces.",
    tokens: [
      { name: "--color-pop", utility: "bg-pop / text-pop", description: "Primary accent blue (#3B82F6). Nav CTA, icon tints, numbered dots." },
      { name: "--color-pop-warm", utility: "bg-pop-warm / text-pop-warm", description: "Amber (#F59E0B). Hero badge dots, benefit icons, underline-draw." },
      { name: "--color-pop-mint", utility: "bg-pop-mint / text-pop-mint", description: "Mint green (#34D399). Resource indicators, employee section accents." },
    ],
  },
  {
    id: "neutrals",
    title: "Neutrals",
    description: "Body copy, surfaces, dividers. Charcoal (#14151c) is the default text color; stone (#F4F4F2) is the secondary surface.",
    tokens: [
      { name: "--color-charcoal", utility: "text-charcoal / bg-charcoal", description: "Primary text and dark surfaces (#14151c)." },
      { name: "--color-charcoal-light", utility: "text-charcoal-light", description: "Secondary text, captions, meta (#555555)." },
      { name: "--color-navy", utility: "bg-navy", description: "Near-black for dark-mode cards (#14151c)." },
      { name: "--color-navy-light", utility: "bg-navy-light", description: "Slightly lifted dark surface (#1c1d24)." },
      { name: "--color-stone", utility: "bg-stone", description: "Light section backgrounds (#F4F4F2)." },
      { name: "--color-stone-dark", utility: "bg-stone-dark", description: "Hover state for stone surfaces (#E5E5E3)." },
      { name: "--color-gray-50", utility: "bg-gray-50", description: "Lightest neutral wash (#F7F7F5)." },
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
      { name: "--color-navy-border", description: "12% white — divider on dark." },
      { name: "--color-border", description: "8% black — default border on light surfaces." },
      { name: "--color-border-hover", description: "16% black — hover border on light surfaces." },
    ],
  },
];

export const radiusTokens: TokenEntry[] = [
  { name: "--radius-sm", utility: "rounded-radius-sm", description: "Small buttons, icon containers (6px)." },
  { name: "--radius-md", utility: "rounded-radius-md", description: "Inputs, campus cards, small containers (12px)." },
  { name: "--radius-lg", utility: "rounded-radius-lg", description: "Cards, callouts, testimonials (16px)." },
  { name: "--radius-xl", utility: "rounded-radius-xl", description: "Large media containers, hero images (24px)." },
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

export const navTokens: TokenEntry[] = [
  { name: "--nav-height", description: "3.25rem — compact floating nav height." },
  { name: "--nav-top-offset", description: "0.75rem — gap above the floating pill nav." },
];

export const fontTokens: TokenEntry[] = [
  { name: "--font-sans", utility: "font-sans", description: "Instrument Sans — body, UI, and display headlines." },
  { name: "--font-heading", utility: "font-heading", description: "Instrument Serif — quote marks and editorial accents." },
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
    label: "Hero / H1 (Overview)",
    className: "font-sans font-bold leading-[0.95] tracking-[-0.05em] text-gradient bg-gradient-to-br from-white via-white to-white/50",
    inlineStyle: { fontSize: "clamp(3.5rem, 8vw + 1rem, 7rem)" },
    sample: "I am MDC",
    usage: "CollageHero only. Gradient text on dark backgrounds. One per site.",
  },
  {
    label: "Hero / H1 (Subpage)",
    className: "font-sans font-bold leading-[1.02] tracking-[-0.04em]",
    inlineStyle: { fontSize: "clamp(2.75rem, 5.5vw + 1rem, 5rem)" },
    sample: "Start Your Career",
    usage: "ImageHero on subpages. Bottom-left aligned on hero images.",
  },
  {
    label: "Manifesto / Display",
    className: "font-sans font-bold leading-[1.02] tracking-[-0.04em]",
    inlineStyle: { fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5rem)" },
    sample: "If You Have a Dream.",
    usage: "ManifestoSection. Always bold, never uppercase.",
  },
  {
    label: "Section / H2",
    className: "font-sans font-bold leading-[1.05] tracking-[-0.03em]",
    inlineStyle: { fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.5rem)" },
    sample: "What We Offer",
    usage: "SectionTitle component. The default page-section heading.",
  },
  {
    label: "Breathing Statement",
    className: "font-sans font-semibold leading-[1.2] tracking-[-0.03em]",
    inlineStyle: { fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.75rem)" },
    sample: "167 countries. One team.",
    usage: "BreathingStatement. Centered between dense sections.",
  },
  {
    label: "Card title / H3",
    className: "font-sans font-semibold text-lg leading-[1.2] tracking-[-0.02em]",
    sample: "Tuition assistance",
    usage: "Card component titles. Also used in benefit rows and bento cards.",
  },
  {
    label: "Stacked row title",
    className: "font-sans font-bold text-2xl md:text-3xl tracking-[-0.03em] leading-[1.1]",
    sample: "Competitive, not corporate.",
    usage: "Full-width stacked divider rows (Why MDC, Our Focus).",
  },
  {
    label: "Lead paragraph",
    className: "text-lg leading-[1.6] tracking-[-0.01em]",
    sample:
      "Miami Dade College has been transforming lives for over six decades.",
    usage: "Subtitles under SectionTitle.",
  },
  {
    label: "Body",
    className: "text-[15px] leading-[1.7]",
    sample:
      "Generous benefits, real career growth, and a community committed to student success.",
    usage: "Default paragraph text inside cards, rows, and blocks.",
  },
  {
    label: "Body small",
    className: "text-[14px] leading-[1.6]",
    sample: "Card description copy lives here.",
    usage: "Compact cards, benefit rows, timeline descriptions.",
  },
  {
    label: "Label / Eyebrow",
    className: "text-[13px] font-medium uppercase tracking-[0.08em] text-charcoal-light",
    sample: "OUR FOCUS",
    usage: "Pre-headline labels, badge indicators, nav items. Always 13px.",
  },
  {
    label: "Stat number",
    className: "font-sans font-bold text-6xl md:text-7xl tracking-[-0.04em]",
    sample: "300K+",
    usage: "Oversized stat displays on dark backgrounds.",
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
    description: "Pill-shaped button or text link. The primary CTA across the site.",
    props: [
      { name: "label", type: "string", required: true, description: "Visible button text." },
      { name: "href", type: "string", required: true, description: "Target URL or path." },
      { name: "variant", type: '"accent" | "white" | "dark" | "outline" | "outline-light" | "link" | "link-light"', description: "Visual style. link/link-light renders as text with arrow." },
      { name: "external", type: "boolean", description: "Adds external icon, opens in new tab, includes sr-only label." },
      { name: "showArrow", type: "boolean", description: "Appends a right-arrow icon (auto for link variants)." },
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
    description: "Content card with 3D hover effect. Supports icon with pop color tint, optional link.",
    props: [
      { name: "title", type: "string", required: true, description: "Card heading." },
      { name: "description", type: "string", required: true, description: "Card body copy." },
      { name: "icon", type: "LucideIcon", description: "Optional Lucide icon. Rendered in pop-tinted background on light theme." },
      { name: "href", type: "string", description: "Makes the entire card a link." },
      { name: "theme", type: '"dark" | "light"', description: "Defaults to dark. Light cards are borderless with card-3d hover." },
      { name: "delay", type: "number", description: "Stagger delay (seconds) for ScrollReveal." },
    ],
  },
  {
    name: "BreathingStatement",
    importPath: "@/components/ui/BreathingStatement",
    description: "Large centered text between dense sections. Includes subtle gradient orb for depth. Use to create rhythm in page flow.",
    props: [
      { name: "text", type: "string", required: true, description: "The statement text." },
      { name: "theme", type: '"light" | "dark"', description: "Background color. Defaults to light (white)." },
    ],
  },
  {
    name: "InfoCallout",
    importPath: "@/components/ui/InfoCallout",
    description: "Supporting content block. Three variants: highlight (icon + body), stat (large number), quote (large quote mark + text).",
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
    description: "Step or sequence card. Blue dot + number label above heading and body.",
    props: [
      { name: "number", type: "string", required: true, description: 'Display numeral, e.g. "01".' },
      { name: "title", type: "string", required: true, description: "Step heading." },
      { name: "description", type: "string", required: true, description: "Step body copy." },
      { name: "delay", type: "number", description: "Stagger delay for entrance animation." },
    ],
  },
  {
    name: "TestimonialCard",
    importPath: "@/components/ui/TestimonialCard",
    description: "Clean quote card with 3D hover and colored quote mark. No photo — text-only.",
    props: [
      { name: "quote", type: "string", required: true, description: "Quote body." },
      { name: "name", type: "string", required: true, description: "Speaker name." },
      { name: "role", type: "string", required: true, description: "Speaker role/title." },
      { name: "variant", type: '"white" | "accent"', description: 'Surface color. accent uses mdc-blue. Defaults to white.' },
      { name: "delay", type: "number", description: "Stagger delay for entrance animation." },
    ],
  },
  {
    name: "ImageHero",
    importPath: "@/components/ui/ImageHero",
    description: "Full-bleed page hero with zoom-in image animation and amber dot badge. One per page.",
    props: [
      { name: "image", type: "string", required: true, description: "Hero image URL." },
      { name: "headline", type: "string", required: true, description: "H1 copy." },
      { name: "subtitle", type: "string", description: "Body subtitle below the headline." },
      { name: "badge", type: "string", description: "Label with amber dot indicator above the headline." },
      { name: "overlay", type: '"dark" | "brand"', description: 'Gradient flavor. "brand" tints toward charcoal. Defaults to brand.' },
      { name: "children", type: "ReactNode", description: "CTA buttons render below the subtitle." },
    ],
  },
  {
    name: "ManifestoSection",
    importPath: "@/components/ui/ManifestoSection",
    description: "Dramatic statement on mdc-blue background with subtle pop-colored gradient orb. Use once per page max.",
    props: [
      { name: "headline", type: "string", required: true, description: "Bold statement text." },
      { name: "body", type: "string", required: true, description: "Supporting copy in the right column." },
    ],
  },
  {
    name: "ImageTextBlock",
    importPath: "@/components/ui/ImageTextBlock",
    description: "Editorial image-and-text pair with rounded image. CTAs use link variant instead of buttons.",
    props: [
      { name: "image", type: "string", required: true, description: "Image URL. 4:3 aspect renders best." },
      { name: "label", type: "string", required: true, description: "Eyebrow label (13px uppercase)." },
      { name: "headline", type: "string", required: true, description: "Section headline." },
      { name: "body", type: "string", required: true, description: "Body paragraph." },
      { name: "ctaLabel", type: "string", description: "Optional CTA text link label." },
      { name: "ctaHref", type: "string", description: "Optional CTA target." },
      { name: "ctaExternal", type: "boolean", description: "Treat ctaHref as an external link." },
      { name: "reverse", type: "boolean", description: "Flips image to the right on desktop." },
    ],
  },
  {
    name: "ImageCardCarousel",
    importPath: "@/components/ui/ImageCardCarousel",
    description: "Horizontal scrolling row of image cards with outlined arrow buttons in the header.",
    props: [
      { name: "label", type: "string", required: true, description: "Eyebrow label above the headline." },
      { name: "headline", type: "string", required: true, description: "Section headline." },
      { name: "cards", type: "{ image: string; title: string; href?: string }[]", required: true, description: "Card data. Cards with href have hover zoom." },
    ],
  },
  {
    name: "ScrollReveal",
    importPath: "@/components/ui/ScrollReveal",
    description: "Wrap any element to fade-and-rise it into view. Subtle: 16px travel, 0.5s duration.",
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Element to animate." },
      { name: "delay", type: "number", description: "Seconds to delay. Use 0.03–0.12 increments." },
      { name: "direction", type: '"up" | "down" | "left" | "right"', description: "Entrance direction. Defaults to up." },
      { name: "distance", type: "number", description: "Pixels traveled. Defaults to 16." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Spacing system
// ---------------------------------------------------------------------------

export interface SpacingRule {
  label: string;
  value: string;
  usage: string;
}

export const spacingSystem = {
  baseUnit: "4px (Tailwind default rem scale — all values are multiples of 4px)",
  sectionPadding: [
    { label: "Horizontal", value: "px-8 md:px-12 lg:px-16", usage: "Every full-width section. 32 → 48 → 64px." },
    { label: "Vertical (standard)", value: "py-24 md:py-32", usage: "Default section rhythm. 96 → 128px." },
    { label: "Vertical (dramatic)", value: "py-28 md:py-40", usage: "Stats, manifesto, breathing statements." },
  ] as SpacingRule[],
  containerWidths: [
    { label: "Content max", value: "max-w-[1200px] mx-auto", usage: "Every section wraps content in this." },
    { label: "Wide text", value: "max-w-4xl", usage: "CollageHero titles." },
    { label: "Standard text", value: "max-w-2xl", usage: "Subtitles, centered quote blocks." },
    { label: "Narrow text", value: "max-w-xl", usage: "Disclaimer text, small blocks." },
  ] as SpacingRule[],
  cardPadding: [
    { label: "Compact", value: "p-7 md:p-8", usage: "Standard cards, benefit rows." },
    { label: "Spacious", value: "p-9 md:p-14", usage: "Featured dark cards, accent sections." },
  ] as SpacingRule[],
  gaps: [
    { label: "Tight", value: "gap-4", usage: "Card grids, button groups." },
    { label: "Medium", value: "gap-6", usage: "Testimonial grids, content rows." },
    { label: "Large", value: "gap-8 md:gap-16", usage: "Two-column layouts, image + text." },
  ] as SpacingRule[],
};

// ---------------------------------------------------------------------------
// Responsive breakpoints
// ---------------------------------------------------------------------------

export interface BreakpointEntry {
  name: string;
  value: string;
  usage: string;
}

export const breakpoints: BreakpointEntry[] = [
  { name: "sm", value: "640px", usage: "Rare. Grid 2-col on small tablets, hide/show nav items." },
  { name: "md", value: "768px", usage: "Primary breakpoint. Padding, font sizes, grid columns all shift here." },
  { name: "lg", value: "1024px", usage: "Desktop layouts. 3-column grids, side-by-side hero content." },
  { name: "xl", value: "1280px", usage: "Not used. Content is capped at max-w-[1200px]." },
];

// ---------------------------------------------------------------------------
// Interactive states
// ---------------------------------------------------------------------------

export interface StateSpec {
  element: string;
  states: { state: string; behavior: string }[];
}

export const interactiveStates: StateSpec[] = [
  {
    element: "Pill buttons (CTAButton)",
    states: [
      { state: "Hover", behavior: "Background shifts to *-hover token, shadow lifts to shadow-md, translateY(-2px)." },
      { state: "Focus", behavior: "2px accent ring with 2px offset. Outline removed, ring replaces it." },
      { state: "Active", behavior: "Scale(0.98) for tactile press feel." },
      { state: "Disabled", behavior: "opacity-50, pointer-events-none. No cursor change." },
    ],
  },
  {
    element: "Text links (link / link-light)",
    states: [
      { state: "Hover", behavior: "Text fades to 70% opacity, arrow icon translates 4px right." },
      { state: "Focus", behavior: "Same accent ring as buttons." },
    ],
  },
  {
    element: "Cards (Card, TestimonialCard)",
    states: [
      { state: "Hover", behavior: "3D transform: translateY(-4px) rotateX(2deg) over 400ms. Border fades in on light cards." },
      { state: "Focus (linked cards)", behavior: "Accent ring on the wrapping anchor." },
    ],
  },
  {
    element: "Navigation links",
    states: [
      { state: "Default", behavior: "text-charcoal-light, 150ms color transition." },
      { state: "Hover", behavior: "text-charcoal." },
      { state: "Active page", behavior: "bg-charcoal/[0.06] pill with text-charcoal." },
    ],
  },
  {
    element: "List rows (Positions page)",
    states: [
      { state: "Hover", behavior: "Background tints to stone/50, icon color shifts to pop, arrow translates 4px right." },
    ],
  },
  {
    element: "Image cards (carousel)",
    states: [
      { state: "Hover", behavior: "Image scales to 1.03 over 500ms. Card title color shifts." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Icon library
// ---------------------------------------------------------------------------

export interface IconEntry {
  name: string;
  sizes: string;
  usage: string;
}

export const iconLibrary: IconEntry[] = [
  { name: "GraduationCap", sizes: "17–24", usage: "Student success, faculty, education focus areas." },
  { name: "Heart", sizes: "18–28", usage: "Work-life balance, community values." },
  { name: "TrendingUp", sizes: "18", usage: "Career growth, professional development." },
  { name: "Shield", sizes: "18", usage: "Benefits, security, trust." },
  { name: "MapPin", sizes: "15–18", usage: "Campus locations, geographic benefits." },
  { name: "Users", sizes: "18–22", usage: "Team, support staff, community." },
  { name: "Globe", sizes: "18–22", usage: "Diversity, community impact." },
  { name: "Sparkles", sizes: "18", usage: "Innovation, technology." },
  { name: "BookOpen", sizes: "17", usage: "Academic excellence, programs." },
  { name: "Award", sizes: "18", usage: "Recognition, credentials." },
  { name: "Star", sizes: "18", usage: "Professional development values." },
  { name: "Lightbulb", sizes: "18", usage: "Focus, ideas." },
  { name: "Building2", sizes: "22", usage: "Professional staff category." },
  { name: "Briefcase", sizes: "22", usage: "Administrative, career opportunities." },
  { name: "ArrowRight", sizes: "14–18", usage: "CTAs, navigation, list row indicators." },
  { name: "ChevronLeft / ChevronRight", sizes: "16", usage: "Carousel pagination arrows." },
  { name: "ExternalLink", sizes: "11–14", usage: "External link indicators." },
  { name: "Menu / X", sizes: "20", usage: "Mobile nav toggle." },
];

export const iconSizeGuide = [
  { size: "11–14px", usage: "Inline indicators (external link, small arrows)." },
  { size: "15–18px", usage: "Card icons, benefit rows, list items. Most common range." },
  { size: "20–24px", usage: "Section-level accents, hero icons, nav toggle." },
  { size: "28px", usage: "Hero-scale feature icons. Use sparingly." },
];

// ---------------------------------------------------------------------------
// Image guidelines
// ---------------------------------------------------------------------------

export interface ImageGuideline {
  label: string;
  description: string;
}

export const imageGuidelines: ImageGuideline[] = [
  { label: "Primary source", description: "YouTube maxresdefault thumbnails: https://img.youtube.com/vi/{videoId}/maxresdefault.jpg. Prototype-only — replace with original photography in production." },
  { label: "Secondary source", description: "Unsplash stock images (CollageHero marquee only). Query: ?auto=format&fit=crop&w=600&q=80." },
  { label: "Aspect ratio", description: "4:3 (aspect-[4/3]) for all content images — ImageTextBlock, ImageCardCarousel, campus cards." },
  { label: "Hero images", description: "Full-bleed, no fixed aspect. Cover the viewport via object-cover. Minimum recommended: 1920×1080." },
  { label: "Border radius", description: "Content images use rounded-radius-lg (16px). Hero images have no radius (full-bleed)." },
  { label: "Overlay — brand", description: "bg-gradient-to-b from-charcoal/20 via-charcoal/30 to-charcoal/95. Used on ImageHero for text readability." },
  { label: "Overlay — dark", description: "bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.15)] to-[rgba(0,0,0,0.92)]. Heavier version." },
  { label: "Overlay — card", description: "bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.7)]. Bottom fade for carousel card titles." },
  { label: "Hover behavior", description: "Content images scale to 1.03 on hover (500ms transition). Hero images zoom from 1.05 → 1 on load." },
  { label: "Alt text", description: "Decorative/background images: alt=\"\". Content images: descriptive alt text." },
];

// ---------------------------------------------------------------------------
// Do's and don'ts
// ---------------------------------------------------------------------------

export interface GuidelineEntry {
  do: string;
  dont: string;
  category: string;
}

export const dosAndDonts: GuidelineEntry[] = [
  {
    category: "Color",
    do: "Use pop colors for small accents — icon backgrounds, dot indicators, quote marks.",
    dont: "Use pop colors on large surfaces or as section backgrounds.",
  },
  {
    category: "Color",
    do: "Use charcoal (#14151c) for primary text. Use charcoal-light (#555) for secondary.",
    dont: "Use pure black (#000) for text or surfaces.",
  },
  {
    category: "Color",
    do: "On dark backgrounds, use white at varying opacities: 100% primary, 50% secondary, 30% tertiary.",
    dont: "Use gray text on dark backgrounds. Use white with opacity instead.",
  },
  {
    category: "Typography",
    do: "Use Instrument Sans for all UI text. Reserve Instrument Serif for quote marks and editorial flourishes only.",
    dont: "Use Instrument Serif for body copy, headings, or UI labels.",
  },
  {
    category: "Typography",
    do: "Use the eyebrow/badge pattern (13px, uppercase, tracking-[0.08em]) for section labels.",
    dont: "Use all-caps on headlines or body text. Only eyebrow labels are uppercase.",
  },
  {
    category: "Spacing",
    do: "Wrap every section in max-w-[1200px] mx-auto with px-8 md:px-12 lg:px-16.",
    dont: "Let content touch viewport edges or exceed 1200px width.",
  },
  {
    category: "Spacing",
    do: "Use py-24 md:py-32 for standard section rhythm.",
    dont: "Vary section padding arbitrarily. Keep vertical rhythm consistent.",
  },
  {
    category: "Components",
    do: "Use ScrollReveal on content that enters the viewport. Stagger groups with 0.03–0.12s delay increments.",
    dont: "Animate everything at once. Stagger creates hierarchy and reduces visual noise.",
  },
  {
    category: "Components",
    do: "Use one ImageHero per page and one ManifestoSection max.",
    dont: "Stack multiple heroes or manifesto sections on the same page.",
  },
  {
    category: "Layout",
    do: "Vary layout structures between pages — bento grids, stacked rows, timelines, list rows.",
    dont: "Repeat the same card grid on every page. Each page should feel distinct.",
  },
  {
    category: "Layout",
    do: "Alternate bg-white and bg-stone sections to create rhythm.",
    dont: "Use the same background color for consecutive sections.",
  },
  {
    category: "Interactive",
    do: "Include focus:ring-2 focus:ring-offset-2 focus:ring-accent on every interactive element.",
    dont: "Remove or suppress focus outlines without replacing them with visible rings.",
  },
  {
    category: "Interactive",
    do: "Use the card-3d class for hover lift on cards. Keep transitions at 400ms.",
    dont: "Use transform: scale() for card hover. The 3D tilt is the established pattern.",
  },
  {
    category: "Images",
    do: "Use 4:3 aspect ratio for content images. Apply rounded-radius-lg.",
    dont: "Use unmasked square or portrait images in content areas.",
  },
  {
    category: "Images",
    do: "Replace YouTube thumbnails with original MDC photography before launch.",
    dont: "Ship YouTube thumbnails to production. They are prototype placeholders.",
  },
];

/**
 * CSS utility classes (not components, but documented for reference).
 */
export const cssUtilities = [
  { name: "text-gradient", description: "Apply gradient text. Requires bg-gradient-to-* on the same element." },
  { name: "card-3d", description: "Adds preserve-3d hover: translateY(-4px) rotateX(2deg). Used on Card, TestimonialCard." },
  { name: "accent-dot", description: "Adds a 6px pop-colored dot before the element via ::before." },
  { name: "underline-draw", description: "Animated underline on hover using background-image. Uses pop-warm color." },
  { name: "scrollbar-hide", description: "Hides native scrollbar. Used on carousels." },
  { name: "animate-marquee", description: "Infinite horizontal scroll. Used on CollageHero image strip." },
];
