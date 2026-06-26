import React from 'react';

/**
 * CTA - Dynamic conversion banner designed with Linear-style radial gradients
 * and clear actionable call-to-actions.
 */
export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 max-w-7xl mx-auto" aria-label="Get Started Banner">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#114C5A]/60 to-[#172B36]/80 border border-brand-light/10 p-8 md:p-16 text-center shadow-2xl">
        {/* Spot light overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,1,0.04),transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-mono text-2xl md:text-5xl font-bold tracking-tight text-brand-white leading-tight mb-6">
            Build your first stream <br />
            in under five minutes.
          </h2>
          <p className="text-brand-light/75 text-sm md:text-lg max-w-xl mb-10">
            Sign up for a sandbox account and get 1 million free ingest events per month. No credit card required. Cancel anytime.
          </p>

          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 bg-[#FFC801] text-[#172B36] font-bold text-sm md:text-base rounded-xl btn-glow-primary transition-all"
            >
              Start Building Now
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 bg-[#114C5A]/40 border border-brand-light/20 hover:border-brand-white text-brand-white font-semibold text-sm md:text-base rounded-xl btn-glow-secondary transition-all"
            >
              Contact Solutions Architect
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-brand-light/40 font-mono text-[10px] md:text-xs">
            <span>✓ No credit card required</span>
            <span>✓ Instant deployment</span>
            <span>✓ SOC2 Type II Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
