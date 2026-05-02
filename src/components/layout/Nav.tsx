"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Why MDC", href: "/why-mdc" },
  { label: "Our Focus", href: "/our-focus" },
  { label: "Positions", href: "/positions-available" },
  { label: "Culture", href: "/our-culture" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-[var(--nav-top-offset)] px-3 md:px-5">
      <nav
        aria-label="Main navigation"
        className="bg-white/85 backdrop-blur-xl border border-border rounded-full max-w-[1200px] mx-auto"
      >
        <div className="px-5 md:px-8 flex items-center justify-between h-[var(--nav-height)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-lg font-semibold text-charcoal tracking-tight">
              MDC
            </span>
            <span className="hidden sm:inline text-charcoal-light text-[13px] font-sans">
              Careers
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-[var(--duration-fast)] ${
                      isActive
                        ? "text-charcoal bg-charcoal/[0.06]"
                        : "text-charcoal-light hover:text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://recruitment.mdc.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-pop text-white text-[13px] font-medium px-4.5 py-2 rounded-full transition-all duration-[var(--duration-normal)] hover:brightness-110 hover:-translate-y-px"
          >
            Apply Now
            <span className="sr-only"> (opens in new tab)</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-charcoal p-2 -mr-2"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <span className="font-heading text-lg font-semibold text-charcoal">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal-light hover:text-charcoal p-1"
                  aria-label="Close navigation menu"
                >
                  <X size={22} />
                </button>
              </div>
              <ul className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? "text-charcoal bg-charcoal/5"
                            : "text-charcoal-light hover:text-charcoal hover:bg-charcoal/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="p-4 border-t border-border">
                <a
                  href="https://recruitment.mdc.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-charcoal hover:bg-charcoal/90 text-white text-sm font-medium px-5 py-3 rounded-full transition-all"
                >
                  Apply Now
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
