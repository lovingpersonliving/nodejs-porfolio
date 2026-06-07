"use client";

import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 border-t border-white/[0.06] bg-charcoal"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="text-xl font-display font-bold text-off-white hover:text-electric-blue transition-colors"
            >
              <span className="text-electric-blue">AC</span>.dev
            </a>
            <p className="mt-2 text-sm text-muted">
              Crafting digital experiences with precision and passion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-off-white/50 hover:text-electric-blue transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {currentYear} Alex Chen. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Designed &amp; built with{" "}
            <span className="text-neon-mint">♥</span> in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
}
