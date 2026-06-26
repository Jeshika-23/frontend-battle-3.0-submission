import React from 'react';

/**
 * Accordion - Accessible, custom mobile representation of the Bento features list.
 * Animates open/close states smoothly using CSS grid-template-rows transition.
 * 
 * @param {Array} items - List of features with badges, descriptions, icons
 * @param {number} activeIndex - Parent-managed state index
 * @param {Function} setActiveIndex - Parent setter to update index
 */
export default function Accordion({ items, activeIndex, setActiveIndex }) {
  const handleToggle = (index) => {
    // If clicking the already open item, toggle it off or keep it open.
    // Standard accordion behaviour keeps at least one open or collapses. Let's toggle.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4 border border-brand-light/10 bg-[#114C5A]/10 p-4 rounded-3xl">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-300 ${
              isOpen
                ? 'border-brand-accent/40 bg-[#114C5A]/35 shadow-lg'
                : 'border-brand-light/5 bg-[#114C5A]/15 hover:border-brand-light/15'
            }`}
          >
            {/* Accordion Trigger Header */}
            <button
              type="button"
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-mono text-brand-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-t-2xl"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
              id={`accordion-trigger-${index}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs text-brand-accent font-semibold px-2 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/20">
                  {item.badge}
                </span>
                <h4 className="text-sm font-bold tracking-tight">{item.title}</h4>
              </div>

              {/* Animated Icon indicator */}
              <span className={`transform transition-transform duration-300 text-brand-accent ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
                </svg>
              </span>


            </button>

            {/* Accessible Expandable Panel */}
            <div
              id={`accordion-panel-${index}`}
              role="region"
              aria-labelledby={`accordion-trigger-${index}`}
              className={`accordion-wrapper ${isOpen ? 'open' : ''}`}
            >
              <div className="accordion-inner">
                <div className="px-5 pb-5 text-xs md:text-sm text-brand-light/80 leading-relaxed border-t border-brand-light/5 pt-4">
                  <p className="mb-4">{item.description}</p>
                  
                  {/* Visual Sandbox Representation for Premium Touch */}
                  <div className="p-3 bg-[#172B36]/80 rounded-xl font-mono text-[10px] text-brand-accent/90 border border-brand-light/5 select-none overflow-hidden">
                    <div className="flex items-center justify-between text-brand-light/40 mb-2 border-b border-brand-light/5 pb-1">
                      <span>FLOW CONTEXT // {item.badge.toUpperCase()}</span>
                      <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                    </div>
                    {item.index === 0 && (
                      <div className="space-y-1">
                        <div>$ aether stream init --source kafka://live-logs</div>
                        <div className="text-brand-white/40">➔ Connected. Listening on port 9092</div>
                        <div className="text-brand-orange">➔ Ingested 18,293 events/sec [OK]</div>
                      </div>
                    )}
                    {item.index === 1 && (
                      <div className="space-y-1">
                        <div>$ aether schema synth --input logs.json</div>
                        <div className="text-brand-white/40">➔ Struct inferred. Confidence: 99.8%</div>
                        <div className="text-brand-orange">➔ Generated Type: interface LogRecord &#123; id: uuid; ts: date; &#125;</div>
                      </div>
                    )}
                    {item.index === 2 && (
                      <div className="space-y-1">
                        <div>$ aether flow run --flow cron-cleaner</div>
                        <div className="text-brand-white/40">➔ Step 1: Filter nulls [DONE]</div>
                        <div className="text-brand-white/40">➔ Step 2: Redact PII [DONE]</div>
                        <div className="text-brand-orange">➔ Target synced: s3://bi-dw [SUCCESS]</div>
                      </div>
                    )}
                    {item.index === 3 && (
                      <div className="space-y-1">
                        <div>$ aether auth status</div>
                        <div className="text-brand-white/40">➔ Cert: SOC2 Type II Verified</div>
                        <div className="text-brand-white/40">➔ Encryption: AES-256 GCM</div>
                        <div className="text-brand-orange">➔ System health: 99.99% Uptime Active</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
