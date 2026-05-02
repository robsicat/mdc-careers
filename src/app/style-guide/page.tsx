import Link from "next/link";
import {
  GraduationCap,
  Heart,
  TrendingUp,
  Users,
  Sparkles,
  Award,
} from "lucide-react";

import { CTAButton } from "@/components/ui/CTAButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { InfoCallout } from "@/components/ui/InfoCallout";
import { NumberedCard } from "@/components/ui/NumberedCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

import { Swatch } from "@/components/style-guide/Swatch";
import { TokenRow } from "@/components/style-guide/TokenRow";
import { Showcase } from "@/components/style-guide/Showcase";
import { PropsTable } from "@/components/style-guide/PropsTable";

import {
  colorGroups,
  radiusTokens,
  shadowTokens,
  motionTokens,
  navTokens,
  fontTokens,
  typeScale,
  componentSpecs,
  cssUtilities,
  spacingSystem,
  breakpoints,
  interactiveStates,
  iconLibrary,
  iconSizeGuide,
  imageGuidelines,
  dosAndDonts,
} from "@/lib/styleGuide";
import { BreathingStatement } from "@/components/ui/BreathingStatement";

export const metadata = {
  title: "Style Guide — MDC Careers",
  description:
    "Design system reference for the MDC Careers prototype: tokens, components, and conventions.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "color", label: "Color" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing & Layout" },
  { id: "radii", label: "Radii & Shadows" },
  { id: "motion", label: "Motion" },
  { id: "interactive", label: "Interactive states" },
  { id: "icons", label: "Icons" },
  { id: "images", label: "Images" },
  { id: "components", label: "Components" },
  { id: "patterns", label: "Page patterns" },
  { id: "dos-donts", label: "Do\u2019s & Don\u2019ts" },
  { id: "accessibility", label: "Accessibility" },
  { id: "maintenance", label: "Maintenance" },
];

function ComponentBySpec({ name }: { name: string }) {
  const spec = componentSpecs.find((c) => c.name === name);
  if (!spec) return null;
  return (
    <div className="space-y-3">
      <p className="text-sm text-charcoal-light leading-relaxed">
        {spec.description}{" "}
        <span className="font-mono text-xs text-charcoal-light/80">
          (import from <code>{spec.importPath}</code>)
        </span>
      </p>
      <PropsTable props={spec.props} />
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-stone border-b border-border pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-charcoal-light mb-4">
            Design System v1.0
          </p>
          <h1
            className="font-sans font-bold tracking-[-0.02em] leading-[1.05] text-charcoal mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 4rem)" }}
          >
            MDC Careers — Style Guide
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl leading-relaxed">
            A living reference for the &ldquo;Working at MDC&rdquo; prototype.
            Tokens, components, and conventions for the team building this out.
            Everything you see here is rendered from the production code — when
            the design changes, this page updates with it.
          </p>
          <nav
            aria-label="Style guide sections"
            className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-6 border-t border-border"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-charcoal-light hover:text-charcoal transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24">
        {/* OVERVIEW */}
        <section id="overview" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-4">
            Overview
          </h2>
          <div className="prose prose-sm max-w-none text-charcoal-light leading-relaxed space-y-4">
            <p>
              This style guide is generated directly from the codebase. Design
              tokens are read from <code>src/app/globals.css</code> at runtime,
              and every component example below is the same React component
              shipping in production. There is no separate design-spec
              document to keep in sync.
            </p>
            <p>
              <strong className="text-charcoal">For developers:</strong> the
              repo is a Next.js 16 static export. Run <code>npm run dev</code>{" "}
              and visit <code>/style-guide</code>. To use a component, import
              it from <code>@/components/ui/*</code> and pass the props
              documented below.
            </p>
            <p>
              <strong className="text-charcoal">For designers:</strong> all
              tokens live in the <code>@theme</code> block of{" "}
              <code>globals.css</code>. Change a value there and every surface
              using it updates — including this page.
            </p>
          </div>
        </section>

        {/* COLOR */}
        <section id="color" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
            Color
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10 max-w-2xl">
            The palette is blue-forward with vibrant pops for personality.
            Reach for <code>charcoal</code> and <code>stone</code> first;
            use <code>mdc-blue</code> for brand moments; layer{" "}
            <code>pop</code>, <code>pop-warm</code>, and <code>pop-mint</code>{" "}
            sparingly for icons, dots, and interactive highlights.
          </p>
          <div className="space-y-12">
            {colorGroups.map((group) => (
              <div key={group.id}>
                <h3 className="font-heading text-xl text-charcoal mb-1">
                  {group.title}
                </h3>
                {group.description && (
                  <p className="text-sm text-charcoal-light leading-relaxed mb-4 max-w-2xl">
                    {group.description}
                  </p>
                )}
                <div className="border border-border rounded-radius-md px-4">
                  {group.tokens.map((t) => (
                    <Swatch key={t.name} {...t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section id="typography" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
            Typography
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10 max-w-2xl">
            Instrument Sans handles all UI and display work; Instrument Serif
            italic provides editorial flourishes only. Geist Mono is reserved
            for code and numeric labels.
          </p>

          <h3 className="font-heading text-xl text-charcoal mb-4">Families</h3>
          <div className="border border-border rounded-radius-md px-4 mb-12">
            {fontTokens.map((t) => (
              <TokenRow
                key={t.name}
                {...t}
                preview={
                  <span
                    className="text-2xl text-charcoal"
                    style={{ fontFamily: `var(${t.name})` }}
                  >
                    Aa Bb Cc
                  </span>
                }
              />
            ))}
          </div>

          <h3 className="font-heading text-xl text-charcoal mb-4">
            Type scale
          </h3>
          <div className="border border-border rounded-radius-md divide-y divide-border">
            {typeScale.map((t) => (
              <div key={t.label} className="p-6">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-charcoal-light mb-3">
                  {t.label}
                </p>
                <div className={t.className} style={t.inlineStyle}>
                  {t.sample}
                </div>
                <p className="text-xs text-charcoal-light leading-relaxed mt-3 max-w-2xl">
                  {t.usage}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SPACING & LAYOUT */}
        <section id="spacing" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
            Spacing & Layout
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10 max-w-2xl">
            Base unit is {spacingSystem.baseUnit}. Every spacing value in the
            system is a multiple of 4. Sections, cards, and gaps follow
            predictable scales documented below.
          </p>

          <h3 className="font-heading text-xl text-charcoal mb-4">
            Section padding
          </h3>
          <div className="border border-border rounded-radius-md divide-y divide-border mb-12">
            {spacingSystem.sectionPadding.map((r) => (
              <div key={r.label} className="flex flex-col sm:flex-row sm:items-center gap-2 p-4">
                <span className="font-sans font-semibold text-sm text-charcoal w-32 shrink-0">{r.label}</span>
                <code className="font-mono text-xs bg-stone px-2 py-1 rounded-radius-sm text-charcoal shrink-0">{r.value}</code>
                <span className="text-sm text-charcoal-light">{r.usage}</span>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-xl text-charcoal mb-4">
            Container widths
          </h3>
          <div className="border border-border rounded-radius-md divide-y divide-border mb-12">
            {spacingSystem.containerWidths.map((r) => (
              <div key={r.label} className="flex flex-col sm:flex-row sm:items-center gap-2 p-4">
                <span className="font-sans font-semibold text-sm text-charcoal w-32 shrink-0">{r.label}</span>
                <code className="font-mono text-xs bg-stone px-2 py-1 rounded-radius-sm text-charcoal shrink-0">{r.value}</code>
                <span className="text-sm text-charcoal-light">{r.usage}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl text-charcoal mb-4">Card padding</h3>
              <div className="border border-border rounded-radius-md divide-y divide-border">
                {spacingSystem.cardPadding.map((r) => (
                  <div key={r.label} className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-sans font-semibold text-sm text-charcoal">{r.label}</span>
                      <code className="font-mono text-xs bg-stone px-2 py-0.5 rounded-radius-sm text-charcoal">{r.value}</code>
                    </div>
                    <p className="text-sm text-charcoal-light">{r.usage}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl text-charcoal mb-4">Grid gaps</h3>
              <div className="border border-border rounded-radius-md divide-y divide-border">
                {spacingSystem.gaps.map((r) => (
                  <div key={r.label} className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-sans font-semibold text-sm text-charcoal">{r.label}</span>
                      <code className="font-mono text-xs bg-stone px-2 py-0.5 rounded-radius-sm text-charcoal">{r.value}</code>
                    </div>
                    <p className="text-sm text-charcoal-light">{r.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="font-heading text-xl text-charcoal mb-4 mt-12">
            Responsive breakpoints
          </h3>
          <p className="text-sm text-charcoal-light leading-relaxed mb-4 max-w-2xl">
            Tailwind 4 defaults. Design mobile-first, override at <code>md:</code> and <code>lg:</code>.
            The <code>xl:</code> breakpoint is intentionally unused — content caps at 1200px.
          </p>
          <div className="border border-border rounded-radius-md divide-y divide-border">
            {breakpoints.map((b) => (
              <div key={b.name} className="flex flex-col sm:flex-row sm:items-center gap-2 p-4">
                <code className="font-mono text-xs bg-stone px-2 py-1 rounded-radius-sm text-charcoal w-16 shrink-0 text-center">{b.name}:</code>
                <span className="font-sans font-semibold text-sm text-charcoal w-20 shrink-0">{b.value}</span>
                <span className="text-sm text-charcoal-light">{b.usage}</span>
              </div>
            ))}
          </div>
        </section>

        {/* RADII & SHADOWS */}
        <section id="radii" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-10">
            Radii & Shadows
          </h2>

          <h3 className="font-heading text-xl text-charcoal mb-4">
            Border radii
          </h3>
          <div className="border border-border rounded-radius-md px-4 mb-12">
            {radiusTokens.map((t) => (
              <TokenRow
                key={t.name}
                {...t}
                preview={
                  <div
                    className="w-16 h-16 bg-mdc-blue"
                    style={{ borderRadius: `var(${t.name})` }}
                  />
                }
              />
            ))}
          </div>

          <h3 className="font-heading text-xl text-charcoal mb-4">Shadows</h3>
          <div className="border border-border rounded-radius-md px-4">
            {shadowTokens.map((t) => (
              <TokenRow
                key={t.name}
                {...t}
                preview={
                  <div
                    className="w-16 h-16 bg-white rounded-radius-sm"
                    style={{ boxShadow: `var(${t.name})` }}
                  />
                }
              />
            ))}
          </div>
        </section>

        {/* MOTION */}
        <section id="motion" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
            Motion
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10 max-w-2xl">
            All entrance animations honor <code>prefers-reduced-motion</code>{" "}
            via the rule in <code>globals.css</code>. Use{" "}
            <code>ScrollReveal</code> for content that enters on scroll and
            stagger groups with <code>delay</code> increments of 0.05–0.15s.
          </p>
          <div className="border border-border rounded-radius-md px-4 mb-12">
            {motionTokens.map((t) => (
              <TokenRow key={t.name} {...t} />
            ))}
          </div>

          <h3 className="font-heading text-xl text-charcoal mb-4">Navigation</h3>
          <div className="border border-border rounded-radius-md px-4">
            {navTokens.map((t) => (
              <TokenRow key={t.name} {...t} />
            ))}
          </div>
        </section>

        {/* INTERACTIVE STATES */}
        <section id="interactive" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
            Interactive States
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10 max-w-2xl">
            Every interactive element has documented hover, focus, and active
            states. Consistency here is what separates polished from
            &ldquo;just works.&rdquo;
          </p>
          <div className="space-y-6">
            {interactiveStates.map((el) => (
              <div key={el.element} className="border border-border rounded-radius-md overflow-hidden">
                <div className="bg-stone px-5 py-3 border-b border-border">
                  <h3 className="font-sans font-semibold text-sm text-charcoal">{el.element}</h3>
                </div>
                <div className="divide-y divide-border">
                  {el.states.map((s) => (
                    <div key={s.state} className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-5 py-3">
                      <span className="font-mono text-xs bg-stone px-2 py-0.5 rounded-radius-sm text-charcoal w-20 shrink-0 text-center self-start">
                        {s.state}
                      </span>
                      <span className="text-sm text-charcoal-light">{s.behavior}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ICONS */}
        <section id="icons" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
            Icon Library
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10 max-w-2xl">
            All icons come from{" "}
            <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover font-medium">
              Lucide React
            </a>
            . Import from <code>lucide-react</code>. Use the size guide below —
            don&apos;t freestyle icon sizes.
          </p>

          <h3 className="font-heading text-xl text-charcoal mb-4">Size guide</h3>
          <div className="border border-border rounded-radius-md divide-y divide-border mb-12">
            {iconSizeGuide.map((s) => (
              <div key={s.size} className="flex flex-col sm:flex-row sm:items-center gap-2 p-4">
                <code className="font-mono text-xs bg-stone px-2 py-1 rounded-radius-sm text-charcoal w-24 shrink-0 text-center">{s.size}</code>
                <span className="text-sm text-charcoal-light">{s.usage}</span>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-xl text-charcoal mb-4">Icons in use</h3>
          <div className="border border-border rounded-radius-md divide-y divide-border">
            {iconLibrary.map((icon) => (
              <div key={icon.name} className="flex flex-col sm:flex-row sm:items-center gap-2 p-4">
                <code className="font-mono text-xs text-charcoal w-48 shrink-0">{icon.name}</code>
                <span className="font-mono text-xs text-charcoal-light w-20 shrink-0">{icon.sizes}px</span>
                <span className="text-sm text-charcoal-light">{icon.usage}</span>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGES */}
        <section id="images" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
            Image Guidelines
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10 max-w-2xl">
            Rules for photography, aspect ratios, overlays, and placeholder
            strategy. The prototype uses YouTube thumbnails — these must be
            replaced with original MDC photography before production.
          </p>
          <div className="border border-border rounded-radius-md divide-y divide-border">
            {imageGuidelines.map((g) => (
              <div key={g.label} className="p-5">
                <h3 className="font-sans font-semibold text-sm text-charcoal mb-1">{g.label}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPONENTS */}
        <section id="components" className="scroll-mt-20 space-y-12">
          <div>
            <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
              Components
            </h2>
            <p className="text-charcoal-light leading-relaxed max-w-2xl">
              Live examples of every UI primitive. Click <em>View code</em> on
              any showcase to copy the exact JSX.
            </p>
          </div>

          {/* CTAButton */}
          <Showcase
            title="CTAButton"
            description="The primary call-to-action element. Five variants for different surface contexts."
            code={`<CTAButton label="Apply Now" href="https://recruitment.mdc.edu" external />
<CTAButton label="Browse roles" href="/positions-available" variant="dark" showArrow />
<CTAButton label="Learn more" href="/why-mdc" variant="outline" />`}
          >
            <div className="flex flex-wrap gap-3 items-center">
              <CTAButton label="Accent (default)" href="#" />
              <CTAButton label="Dark" href="#" variant="dark" showArrow />
              <CTAButton label="White" href="#" variant="white" />
              <CTAButton label="Outline" href="#" variant="outline" />
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4 pt-4 border-t border-border">
              <CTAButton label="Text link" href="#" variant="link" />
              <CTAButton label="External link" href="https://example.com" variant="link" external />
            </div>
            <div className="mt-6 p-6 -mx-6 -mb-6 bg-charcoal flex flex-wrap gap-4 items-center">
              <CTAButton label="Outline-light" href="#" variant="outline-light" />
              <CTAButton label="White" href="https://example.com" variant="white" external />
              <CTAButton label="Light link" href="#" variant="link-light" />
            </div>
          </Showcase>
          <ComponentBySpec name="CTAButton" />

          {/* SectionTitle */}
          <Showcase
            title="SectionTitle"
            description="Standard heading block. Use as the lead-in for any page section."
            code={`<SectionTitle
  badge="OUR FOCUS"
  title="Built for educators, by educators"
  subtitle="Every role at MDC supports the same mission: changing lives through learning."
  theme="light"
/>`}
          >
            <SectionTitle
              badge="OUR FOCUS"
              title="Built for educators, by educators"
              subtitle="Every role at MDC supports the same mission: changing lives through learning."
              theme="light"
            />
          </Showcase>
          <ComponentBySpec name="SectionTitle" />

          {/* Card */}
          <Showcase
            title="Card — light"
            description="Default content card on white or stone backgrounds."
            surface="stone"
            code={`<Card
  icon={GraduationCap}
  title="Tuition assistance"
  description="Continue your education with employer-funded tuition support."
  theme="light"
/>`}
          >
            <div className="grid md:grid-cols-3 gap-4">
              <Card
                icon={GraduationCap}
                title="Tuition assistance"
                description="Continue your education with employer-funded tuition support."
                theme="light"
              />
              <Card
                icon={Heart}
                title="Health & wellness"
                description="Comprehensive medical, dental, and vision plans for you and your family."
                theme="light"
              />
              <Card
                icon={TrendingUp}
                title="Career growth"
                description="Mentorship, leadership programs, and a clear path forward."
                theme="light"
                href="/why-mdc"
              />
            </div>
          </Showcase>

          <Showcase
            title="Card — dark"
            description="Use on the manifesto-adjacent dark sections."
            surface="dark"
            code={`<Card
  icon={Sparkles}
  title="Innovate boldly"
  description="We back ideas that improve outcomes for our students."
  theme="dark"
/>`}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Card
                icon={Sparkles}
                title="Innovate boldly"
                description="We back ideas that improve outcomes for our students."
                theme="dark"
              />
              <Card
                icon={Users}
                title="Collaborate widely"
                description="Cross-campus teams, real partnerships, shared wins."
                theme="dark"
              />
            </div>
          </Showcase>
          <ComponentBySpec name="Card" />

          {/* InfoCallout */}
          <Showcase
            title="InfoCallout — highlight"
            description="Icon + title + body. The default callout on light surfaces."
            code={`<InfoCallout
  icon={Award}
  title="Top-rated employer"
  text="Recognized in the Forbes 2025 list of America's Best Large Employers."
  theme="light"
/>`}
          >
            <InfoCallout
              icon={Award}
              title="Top-rated employer"
              text="Recognized in the Forbes 2025 list of America's Best Large Employers."
              theme="light"
            />
          </Showcase>

          <Showcase
            title="InfoCallout — stat"
            description="Big number with subtext. Use in stat grids."
            surface="stone"
            code={`<InfoCallout
  variant="stat"
  stat="60+"
  title="Years of impact"
  text="Transforming lives in South Florida since 1959."
/>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InfoCallout
                variant="stat"
                stat="60+"
                title="Years of impact"
                text="Transforming lives in South Florida since 1959."
              />
              <InfoCallout
                variant="stat"
                stat="100K+"
                title="Students served"
                text="Across eight campuses and online."
              />
              <InfoCallout
                variant="stat"
                stat="93%"
                title="Employee satisfaction"
                text="Internal engagement survey, 2025."
              />
            </div>
          </Showcase>

          <Showcase
            title="InfoCallout — quote"
            description="Compact testimonial. Star rating is hard-coded."
            surface="stone"
            code={`<InfoCallout
  variant="quote"
  text="The benefits are great, but the people are why I stay."
  attribution="Maria, Faculty"
/>`}
          >
            <div className="max-w-md">
              <InfoCallout
                variant="quote"
                text="The benefits are great, but the people are why I stay."
                attribution="Maria, Faculty"
              />
            </div>
          </Showcase>
          <ComponentBySpec name="InfoCallout" />

          {/* NumberedCard */}
          <Showcase
            title="NumberedCard"
            description="Step-by-step or sequence cards. Always rendered in groups."
            surface="stone"
            code={`<NumberedCard
  number="01"
  title="Find a role"
  description="Browse open positions on the MDC recruitment portal."
/>`}
          >
            <div className="grid md:grid-cols-3 gap-4">
              <NumberedCard
                number="01"
                title="Find a role"
                description="Browse open positions on the MDC recruitment portal."
              />
              <NumberedCard
                number="02"
                title="Apply online"
                description="Submit your application and supporting materials."
              />
              <NumberedCard
                number="03"
                title="Interview"
                description="Meet the team and learn about the role in detail."
              />
            </div>
          </Showcase>
          <ComponentBySpec name="NumberedCard" />

          {/* TestimonialCard */}
          <Showcase
            title="TestimonialCard"
            description="Photo-led testimonial. The image area uses a gradient placeholder until real photography is supplied."
            surface="stone"
            code={`<TestimonialCard
  quote="Every day I see students change their lives — and I'm part of that."
  name="Dr. Andre Williams"
  role="Faculty, Engineering"
  variant="white"
/>`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <TestimonialCard
                quote="Every day I see students change their lives — and I'm part of that."
                name="Dr. Andre Williams"
                role="Faculty, Engineering"
                variant="white"
              />
              <TestimonialCard
                quote="MDC invests in its people. The growth I've had here is real."
                name="Sofia Reyes"
                role="Director, Student Success"
                variant="accent"
              />
            </div>
          </Showcase>
          <ComponentBySpec name="TestimonialCard" />

          {/* BreathingStatement */}
          <Showcase
            title="BreathingStatement"
            description="Large centered text to create rhythm between dense sections. Includes a subtle gradient orb."
            code={`<BreathingStatement text="167 countries. One team. One mission." theme="dark" />`}
          >
            <BreathingStatement text="167 countries. One team. One mission." />
          </Showcase>
          <ComponentBySpec name="BreathingStatement" />

          {/* CSS Utilities */}
          <div>
            <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] mb-2 mt-12">
              CSS Utilities
            </h3>
            <p className="text-charcoal-light leading-relaxed mb-6 max-w-2xl">
              Global utility classes defined in <code>globals.css</code>. Apply directly via className.
            </p>
            <div className="border border-border rounded-radius-md divide-y divide-border">
              {cssUtilities.map((u) => (
                <div key={u.name} className="flex items-start gap-4 p-4">
                  <code className="font-mono text-xs bg-stone px-2 py-1 rounded-radius-sm text-charcoal shrink-0">
                    .{u.name}
                  </code>
                  <p className="text-sm text-charcoal-light">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAGE PATTERNS */}
        <section id="patterns" className="scroll-mt-20 space-y-8">
          <div>
            <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
              Page patterns
            </h2>
            <p className="text-charcoal-light leading-relaxed max-w-2xl">
              These full-bleed compositions only make sense in their natural
              context. Visit the live pages to see them at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "ImageHero",
                href: "/",
                blurb:
                  "Full-bleed photographic hero with badge, headline, italic subtitle, and CTA row. One per page, always at the top.",
              },
              {
                name: "ManifestoSection",
                href: "/why-mdc",
                blurb:
                  "Dramatic two-column statement on deep blue. Use once per page, no more.",
              },
              {
                name: "ImageTextBlock",
                href: "/our-focus",
                blurb:
                  "Editorial 50/50 image-and-text. Alternate the reverse prop to create rhythm down a page.",
              },
              {
                name: "ImageCardCarousel",
                href: "/our-culture",
                blurb:
                  "Horizontal scrolling row of image cards with paginating arrows. Snap-scroll on touch.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="border border-border rounded-radius-lg p-6"
              >
                <h3 className="font-heading text-xl text-charcoal mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                  {p.blurb}
                </p>
                <Link
                  href={p.href}
                  className="text-sm text-accent hover:text-accent-hover font-medium"
                >
                  See it live →
                </Link>
              </div>
            ))}
          </div>

          <div className="space-y-3 mt-8">
            <ComponentBySpec name="ImageHero" />
            <ComponentBySpec name="ManifestoSection" />
            <ComponentBySpec name="ImageTextBlock" />
            <ComponentBySpec name="ImageCardCarousel" />
            <ComponentBySpec name="ScrollReveal" />
          </div>
        </section>

        {/* DO'S AND DON'TS */}
        <section id="dos-donts" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-2">
            Do&apos;s & Don&apos;ts
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10 max-w-2xl">
            Quick-reference rules to prevent design drift. When in doubt, check
            here before improvising.
          </p>
          {(() => {
            const categories = [...new Set(dosAndDonts.map((d) => d.category))];
            return (
              <div className="space-y-8">
                {categories.map((cat) => (
                  <div key={cat}>
                    <h3 className="font-heading text-xl text-charcoal mb-4">{cat}</h3>
                    <div className="space-y-3">
                      {dosAndDonts
                        .filter((d) => d.category === cat)
                        .map((d, i) => (
                          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="border border-pop-mint/30 bg-pop-mint/[0.04] rounded-radius-md p-4">
                              <span className="inline-block font-mono text-xs font-semibold text-pop-mint bg-pop-mint/[0.12] px-2 py-0.5 rounded-radius-sm mb-2">
                                DO
                              </span>
                              <p className="text-sm text-charcoal leading-relaxed">{d.do}</p>
                            </div>
                            <div className="border border-pop-warm/30 bg-pop-warm/[0.04] rounded-radius-md p-4">
                              <span className="inline-block font-mono text-xs font-semibold text-pop-warm bg-pop-warm/[0.12] px-2 py-0.5 rounded-radius-sm mb-2">
                                DON&apos;T
                              </span>
                              <p className="text-sm text-charcoal leading-relaxed">{d.dont}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </section>

        {/* ACCESSIBILITY */}
        <section id="accessibility" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-6">
            Accessibility
          </h2>
          <ul className="space-y-3 text-charcoal-light leading-relaxed">
            <li>
              <strong className="text-charcoal">Skip link:</strong> the{" "}
              <code>.skip-to-content</code> anchor in <code>layout.tsx</code>{" "}
              jumps keyboard users to <code>#main-content</code>.
            </li>
            <li>
              <strong className="text-charcoal">Reduced motion:</strong> a
              global media query in <code>globals.css</code> disables
              animations when <code>prefers-reduced-motion</code> is set. New
              animations should rely on CSS transitions or Framer Motion —
              both honor the rule automatically.
            </li>
            <li>
              <strong className="text-charcoal">External links:</strong>{" "}
              always include <code>target=&quot;_blank&quot;</code>,{" "}
              <code>rel=&quot;noopener noreferrer&quot;</code>, and an{" "}
              <code>sr-only</code> &ldquo;(opens in new tab)&rdquo; span. The{" "}
              <code>CTAButton</code> handles this when{" "}
              <code>external</code> is passed.
            </li>
            <li>
              <strong className="text-charcoal">Focus rings:</strong> every
              interactive element shows a 2px accent ring. Don&apos;t suppress
              outlines without replacing them.
            </li>
            <li>
              <strong className="text-charcoal">Headings:</strong> one{" "}
              <code>h1</code> per page (the hero), then a strict{" "}
              <code>h2</code>/<code>h3</code> hierarchy. Use{" "}
              <code>SectionTitle</code> for <code>h2</code>s.
            </li>
            <li>
              <strong className="text-charcoal">Images:</strong> decorative
              backgrounds use empty <code>alt=&quot;&quot;</code>; content
              images get descriptive alt text.
            </li>
          </ul>
        </section>

        {/* MAINTENANCE */}
        <section id="maintenance" className="scroll-mt-20">
          <h2 className="font-sans font-bold text-3xl tracking-[-0.02em] mb-6">
            Maintenance
          </h2>
          <div className="space-y-6 text-charcoal-light leading-relaxed">
            <div>
              <h3 className="font-heading text-xl text-charcoal mb-2">
                To change a token value
              </h3>
              <p>
                Edit the value in <code>src/app/globals.css</code> (the{" "}
                <code>@theme</code> block). Every component using that token
                — and this style guide — updates automatically. No other
                files need to change.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl text-charcoal mb-2">
                To add a new token
              </h3>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>
                  Declare it in the <code>@theme</code> block of{" "}
                  <code>globals.css</code>.
                </li>
                <li>
                  Register the variable name in{" "}
                  <code>src/lib/styleGuide.ts</code> so it appears here.
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-heading text-xl text-charcoal mb-2">
                To add a new component
              </h3>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>
                  Build it under <code>src/components/ui/</code>. Follow the
                  existing pattern: typed props, optional{" "}
                  <code>className</code> escape hatch, theme-aware where
                  appropriate.
                </li>
                <li>
                  Add an entry to <code>componentSpecs</code> in{" "}
                  <code>src/lib/styleGuide.ts</code>.
                </li>
                <li>
                  Add a <code>&lt;Showcase&gt;</code> block in this file.
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-heading text-xl text-charcoal mb-2">
                Source files
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 font-mono text-sm">
                <li>src/app/globals.css — token values</li>
                <li>src/lib/styleGuide.ts — what gets documented here</li>
                <li>src/app/style-guide/page.tsx — this page</li>
                <li>src/components/style-guide/* — page-only helpers</li>
                <li>docs/STYLE_GUIDE.md — written handoff document</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
