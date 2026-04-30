import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-white mb-4">
              Miami Dade College
            </h3>
            <p className="text-warm-gray text-sm leading-relaxed">
              The most diverse institution in the nation, MDC is transforming
              lives through accessible, high-quality teaching and learning.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.05em] font-semibold text-warm-muted mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
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
                    className="text-warm-gray hover:text-white text-sm inline-flex items-center gap-1.5 transition-colors duration-[var(--duration-fast)]"
                  >
                    {link.label}
                    <ExternalLink size={12} className="opacity-50" />
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.05em] font-semibold text-warm-muted mb-4">
              Contact HR
            </h3>
            <p className="text-warm-gray text-sm leading-relaxed">
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <p className="text-warm-muted text-xs">
            &copy; {new Date().getFullYear()} Miami Dade College
          </p>
          <p className="text-warm-muted text-xs max-w-xl leading-relaxed">
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
