import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/[0.06] py-20 md:py-28 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          <div>
            <h3 className="font-sans text-lg font-semibold text-white mb-4 tracking-[-0.01em]">
              Miami Dade College
            </h3>
            <p className="text-white/45 text-[15px] leading-[1.7]">
              The most diverse institution in the nation, MDC is transforming
              lives through accessible, high-quality teaching and learning.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.1em] font-medium text-white/30 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {[
                { label: "MDC Home", href: "https://www.mdc.edu" },
                { label: "Job Openings", href: "https://recruitment.mdc.edu" },
                {
                  label: "MDConnect (Employees)",
                  href: "https://mdconnect.mdc.edu",
                },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white text-[15px] inline-flex items-center gap-1.5 transition-colors duration-[var(--duration-fast)]"
                  >
                    {link.label}
                    <ExternalLink size={11} className="opacity-40" />
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.1em] font-medium text-white/30 mb-5">
              Contact HR
            </h3>
            <p className="text-white/45 text-[15px] leading-[1.7]">
              Human Resources Department
              <br />
              Miami Dade College
              <br />
              300 NE 2nd Ave
              <br />
              Miami, FL 33132
            </p>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <p className="text-white/25 text-[13px]">
            &copy; {new Date().getFullYear()} Miami Dade College
          </p>
          <p className="text-white/25 text-[13px] max-w-xl leading-[1.6]">
            Miami Dade College is an equal access/equal opportunity institution
            and does not discriminate on the basis of sex, race, color, marital
            status, age, religion, national origin, disability, veteran&apos;s
            status, ethnicity, genetic information, pregnancy, sexual
            orientation, or gender identity.
          </p>
        </div>
      </div>
    </footer>
  );
}
