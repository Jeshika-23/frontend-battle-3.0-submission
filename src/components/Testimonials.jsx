import React from 'react';

/**
 * Testimonials - Highlights customer reviews from engineering executives and practitioners.
 * Styled using cards with hover glow and rounded frames to mirror luxury SaaS products.
 * Optimized for header structures and contrast performance.
 */
export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Director of Platform Engineering at Globex Inc',
      quote: 'AetherFlow completely simplified our ingestion bottleneck. We went from fighting flaky custom scripts to orchestrating SOC2-compliant streams in less than a week. The schema auto-generator alone saved us months of engineering time.',
      rating: 5,
      avatarInitials: 'SJ',
    },
    {
      name: 'Marcus Chen',
      role: 'Lead Architect at Tyrell Corp',
      quote: 'We run hundreds of millions of events per hour through AetherFlow. The performance is rock solid with sub-10ms latency overhead, and the bento layout tools let our team debug pipeline status seamlessly on mobile and desktop.',
      rating: 5,
      avatarInitials: 'MC',
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Data Science at Cyberdyne Systems',
      quote: 'Excellent platform that prioritizes developer ergonomics. Having native versioned schemas, custom retry backoffs, and immediate multi-currency invoicing without complex contracts makes scaling our pipelines a complete pleasure.',
      rating: 5,
      avatarInitials: 'ER',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 max-w-7xl mx-auto border-t border-brand-light/5" aria-label="Customer Testimonials">
      <div className="text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#FFC801] mb-3 block">
          Proven in Production
        </span>
        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-brand-white">
          Loved by engineers, trusted by executives.
        </h2>
        <p className="mt-4 text-base md:text-lg text-brand-light/75 max-w-2xl mx-auto">
          See how leading data organizations accelerate their integrations and automate flows with AetherFlow.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <article
            key={idx}
            className="bg-[#114C5A]/15 border border-brand-light/10 rounded-3xl p-8 card-lift-glow flex flex-col justify-between"
          >
            <div>
              {/* Star Rating with explicit dimensions */}
              <div className="flex gap-1 mb-6" aria-label={`Rating: ${rev.rating} stars`}>
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FFC801]" fill="currentColor" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-light/85 text-sm md:text-base leading-relaxed italic mb-8">
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>

            {/* User Profile info */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#114C5A] border border-brand-light/20 flex items-center justify-center text-xs font-bold text-[#FFC801] shadow-inner select-none">
                {rev.avatarInitials}
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-brand-white">{rev.name}</h3>
                <p className="text-xs text-brand-light/50">{rev.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
