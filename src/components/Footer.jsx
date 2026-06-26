import React from 'react';

/**
 * Footer - Semantic page footer with structured site map links,
 * copyright, and live infrastructure status badge.
 */
export default function Footer() {
  const links = {
    Product: [
      { label: 'Pipeline Engine', href: '#features' },
      { label: 'Schema Synthesizer', href: '#features' },
      { label: 'Security Protocols', href: '#' },
      { label: 'Pricing Matrix', href: '#pricing' },
    ],
    Developers: [
      { label: 'API Reference', href: '#' },
      { label: 'CLI Installer', href: '#' },
      { label: 'System status', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
    Enterprise: [
      { label: 'SLA Guarantee', href: '#' },
      { label: 'Custom Architectures', href: '#' },
      { label: 'VPC Deployments', href: '#' },
      { label: 'Compliance & Audits', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'SOC2 Certification', href: '#' },
      { label: 'Data Processing Addendum', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#114C5A]/10 border-t border-brand-light/5 pt-16 pb-12 px-4" aria-label="AetherFlow Footer">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
        
        {/* Brand Information Column */}
        <div className="col-span-2 flex flex-col gap-4 text-left">
          <a href="#" className="flex items-center gap-2 font-mono text-brand-white text-lg font-bold select-none focus:outline-none" aria-label="AetherFlow Homepage">
            <div className="w-7 h-7 rounded-lg bg-[#FFC801] flex items-center justify-center text-[#172B36] p-1.5 shadow">
              <svg viewBox="0 0 16 16" className="w-full h-full fill-current" aria-hidden="true" width="14" height="14">
                <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
              </svg>
            </div>
            <span>Aether<span className="text-[#FFC801]">Flow</span></span>
          </a>
          <p className="text-xs text-brand-light/65 leading-relaxed max-w-sm">
            AetherFlow is a premium serverless data automation suite built for sub-millisecond stream transformations, schema syntheses, and enterprise-grade data security.
          </p>
          
          {/* System Status Tracker */}
          <div className="mt-2 inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#114C5A]/30 border border-emerald-500/10 text-emerald-400 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">
              All systems operational
            </span>
          </div>

          {/* Quick Search Widget - Integrating search.svg */}
          <div className="mt-4 max-w-[240px] relative">
            <label htmlFor="footer-search" className="sr-only">Search resources</label>
            <input
              id="footer-search"
              type="text"
              placeholder="Search docs..."
              className="w-full bg-[#114C5A]/20 border border-brand-light/10 focus:border-[#FFC801]/50 rounded-lg py-1.5 pl-8 pr-3 text-xs text-brand-white placeholder-brand-light/40 font-mono focus:outline-none transition-colors duration-150"
            />
            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-brand-light/40 pointer-events-none">
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current" aria-hidden="true" width="14" height="14">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
          </div>
        </div>


        {/* Dynamic Map Links Columns */}
        {Object.entries(links).map(([category, items]) => (
          <div key={category} className="text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFC801] mb-4">
              {category}
            </h4>
            <ul className="space-y-2.5" role="list">
              {items.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs text-brand-light/60 hover:text-brand-white transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-brand-light/5 mb-8" />

      {/* Copy and social alignment */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-light/45 font-mono text-[10px] md:text-xs text-center sm:text-left">
        <div>
          <span>© {new Date().getFullYear()} AetherFlow Technologies, Inc. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-white transition-colors">Twitter/X</a>
          <a href="#" className="hover:text-brand-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-brand-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
