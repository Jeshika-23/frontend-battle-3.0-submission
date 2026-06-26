import React from 'react';
import { CURRENCY_CONFIGS } from '../data/pricing';

/**
 * CurrencySwitcher - Memoized component for selecting currency and billing frequency.
 * Designed with focus rings, ARIA tags, and minimal re-render impact.
 */
const CurrencySwitcher = React.memo(({
  currency,
  setCurrency,
  billingCycle,
  setBillingCycle,
}) => {
  const currencies = Object.keys(CURRENCY_CONFIGS);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-hero-reveal delay-200">
      {/* Billing Cycle Toggle */}
      <div className="flex items-center p-1 bg-[#114C5A] rounded-full border border-brand-light/10 shadow-inner">
        <button
          type="button"
          onClick={() => setBillingCycle('monthly')}
          className={`px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
            billingCycle === 'monthly'
              ? 'bg-[#FFC801] text-[#172B36] font-bold shadow'
              : 'text-brand-white/80 hover:text-brand-white'
          }`}
          aria-pressed={billingCycle === 'monthly'}
          aria-label="Switch to monthly billing"
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBillingCycle('annual')}
          className={`relative px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${
            billingCycle === 'annual'
              ? 'bg-[#FFC801] text-[#172B36] font-bold shadow'
              : 'text-brand-white/80 hover:text-brand-white'
          }`}
          aria-pressed={billingCycle === 'annual'}
          aria-label="Switch to annual billing, 20% discount applied"
        >
          <span>Annual</span>
          <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
            billingCycle === 'annual'
              ? 'bg-[#172B36] text-[#FFC801]'
              : 'bg-[#FF9932] text-[#172B36] font-semibold'
          }`}>
            -20%
          </span>
        </button>
      </div>

      {/* Currency Selector */}
      <div className="flex items-center p-1 bg-[#114C5A]/50 rounded-full border border-brand-light/10 shadow-inner">
        {currencies.map((currCode) => {
          const isActive = currency === currCode;
          return (
            <button
              key={currCode}
              type="button"
              onClick={() => setCurrency(currCode)}
              className={`px-4 py-2 font-mono text-xs md:text-sm rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-brand-white text-[#172B36] font-bold shadow'
                  : 'text-brand-white/70 hover:text-brand-white hover:bg-brand-white/5'
              }`}
              aria-pressed={isActive}
              aria-label={`Select pricing in ${currCode}`}
            >
              {currCode}
            </button>
          );
        })}
      </div>
    </div>
  );
});

CurrencySwitcher.displayName = 'CurrencySwitcher';

export default CurrencySwitcher;
