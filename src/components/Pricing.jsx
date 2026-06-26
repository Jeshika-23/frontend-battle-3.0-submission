import React, { useState } from 'react';
import CurrencySwitcher from './CurrencySwitcher';
import { calculateMonthlyPrice, TIER_FEATURES, CURRENCY_CONFIGS } from '../data/pricing';

/**
 * Pricing - Encapsulates currency and billing cycle state locally.
 * Prevents the parent App component from re-rendering when prices shift.
 * Refactored for clean SEO crawl structure and accessibility compliance.
 */
export default function Pricing() {
  const [currency, setCurrency] = useState('USD');
  const [billingCycle, setBillingCycle] = useState('annual');

  const tiers = ['Starter', 'Professional', 'Enterprise'];
  const currencySymbol = CURRENCY_CONFIGS[currency]?.symbol || '$';

  return (
    <section id="pricing" className="py-24 px-4 max-w-7xl mx-auto border-t border-brand-light/5" aria-label="Subscription Pricing Plans">
      <div className="text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#FFC801] mb-3 block">
          Predictable Pricing
        </span>
        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-brand-white">
          Ready to scale? Select your plan.
        </h2>
        <p className="mt-4 text-base md:text-lg text-brand-light/75 max-w-2xl mx-auto">
          Start for free, upgrade instantly. No hidden fees. Get 20% off when billed annually.
        </p>
      </div>

      {/* Localized Switcher State to limit re-renders */}
      <CurrencySwitcher
        currency={currency}
        setCurrency={setCurrency}
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
      />

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => {
          const isProfessional = tier === 'Professional';
          const monthlyPrice = calculateMonthlyPrice(tier, currency, billingCycle);
          const features = TIER_FEATURES[tier] || [];

          return (
            <article
              key={tier}
              className={`relative rounded-3xl p-8 card-lift-glow flex flex-col justify-between ${
                isProfessional
                  ? 'bg-[#114C5A] border-2 border-brand-accent/50 shadow-lg shadow-brand-accent/5'
                  : 'bg-[#114C5A]/30 border border-brand-light/10'
              }`}
            >
              {isProfessional && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-orange text-[#172B36] text-xs font-bold uppercase tracking-wider rounded-full shadow-md font-mono">
                  Most Popular
                </span>
              )}

              <div>
                {/* Header with optimized hierarchical elements */}
                <header className="mb-8">
                  <h3 className="font-mono text-xl font-bold text-brand-white mb-2">{tier}</h3>
                  <p className="text-xs text-brand-light/70">
                    {tier === 'Starter' && 'Perfect for developers and early pilots.'}
                    {tier === 'Professional' && 'Built for growing teams and custom APIs.'}
                    {tier === 'Enterprise' && 'Enterprise orchestration at high throughput.'}
                  </p>
                </header>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-mono text-4xl md:text-5xl font-bold text-[#FFC801]">
                    {currencySymbol}
                    {monthlyPrice}
                  </span>
                  <span className="text-xs text-brand-light/75">/mo</span>
                </div>

                {/* Billing note */}
                <p className="text-xs text-brand-light/60 mb-8 -mt-6">
                  {billingCycle === 'annual'
                    ? `Billed annually (${currencySymbol}${(monthlyPrice * 12).toLocaleString()}/yr)`
                    : 'Billed monthly'}
                </p>

                {/* Separator */}
                <hr className="border-brand-light/10 mb-8" />

                {/* Features Checklist */}
                <ul className="space-y-4 mb-8" aria-label={`Features included in ${tier} plan`}>
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-brand-light/85">
                      <svg
                        className="w-4 h-4 text-[#FFC801] shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                        aria-hidden="true"
                        width="16"
                        height="16"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <footer>
                <button
                  type="button"
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 outline-none ${
                    isProfessional
                      ? 'bg-[#FFC801] text-[#172B36] btn-glow-primary'
                      : 'bg-brand-white/10 text-brand-white border border-brand-light/20 hover:bg-brand-white/20 hover:border-brand-white/30'
                  }`}
                >
                  {tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}
