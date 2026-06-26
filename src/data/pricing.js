/**
 * Pricing Engine Configuration and Data Matrix
 * Calculates subscription fees dynamically based on base prices, currency multipliers, and billing frequencies.
 */

// Supported Currencies configuration
export const CURRENCY_CONFIGS = {
  USD: {
    code: 'USD',
    symbol: '$',
    multiplier: 1.0,
    format: (value) => `$${value}`,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    multiplier: 0.92,
    format: (value) => `€${value}`,
  },
  INR: {
    code: 'INR',
    symbol: '₹',
    multiplier: 83.0,
    format: (value) => `₹${value.toLocaleString('en-IN')}`,
  },
};

// Base Monthly prices in USD
export const BASE_PRICING = {
  Starter: 29,
  Professional: 99,
  Enterprise: 299,
};

// Discount for annual plans (20% off)
export const ANNUAL_DISCOUNT_MULTIPLIER = 0.8;

/**
 * Calculates the price per month for a given tier, currency, and cycle.
 * @param {string} tier - Starter, Professional, Enterprise
 * @param {string} currencyCode - USD, EUR, INR
 * @param {string} billingCycle - monthly, annual
 * @returns {number} The calculated and rounded monthly cost.
 */
export const calculateMonthlyPrice = (tier, currencyCode, billingCycle) => {
  const basePrice = BASE_PRICING[tier] || 0;
  const config = CURRENCY_CONFIGS[currencyCode] || CURRENCY_CONFIGS.USD;
  
  let price = basePrice * config.multiplier;
  
  if (billingCycle === 'annual') {
    price = price * ANNUAL_DISCOUNT_MULTIPLIER;
  }
  
  // Clean rounding: Round to nearest whole number for readability,
  // except for INR where we can round to the nearest 99 or 100 for premium SaaS style.
  if (currencyCode === 'INR') {
    // Round to nearest 100 and subtract 1 (e.g. 2399, 8299)
    const rounded = Math.round(price / 100) * 100;
    return Math.max(99, rounded - 1);
  }
  
  // For USD/EUR, round to nearest whole number
  return Math.round(price);
};

// Feature inclusion details per tier
export const TIER_FEATURES = {
  Starter: [
    'Up to 5 data pipelines',
    'Real-time stream (100k events/mo)',
    'Auto schema synthesis (Basic)',
    '14-day data retention',
    'Standard email support',
  ],
  Professional: [
    'Unlimited pipelines',
    'Real-time stream (5M events/mo)',
    'Advanced schema synthesis & versioning',
    '90-day data retention',
    'Priority 24/7 support',
    'Custom API integrations',
  ],
  Enterprise: [
    'Unlimited pipelines & high-throughput stream',
    'Custom event limits (billions/mo)',
    'Enterprise schema governance & compliance',
    'Unlimited retention options',
    'Dedicated Solutions Architect',
    'SLA-backed support & custom contract',
    'Self-hosted VPC options',
  ],
};
