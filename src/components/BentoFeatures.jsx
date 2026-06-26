import React, { useState, useRef, useCallback } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Accordion from './Accordion';
import { FEATURES_DATA } from '../data/features';

/**
 * BentoFeatures - Renders Bento Grid on Desktop (>= 1024px)
 * and switches automatically to an Accordion on Mobile.
 * Syncs the active element index across layout transitions.
 * Optimized for React rendering cycles, SEO, and visual performance.
 */
export default function BentoFeatures() {
  const { width } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const cardsRef = useRef([]);

  // Memoized mouse-move handler to prevent recreation on every render cycle
  const handleMouseMove = useCallback((e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const isDesktop = width >= 1024;

  // Icon render helper mapping string name to premium inline SVGs with explicit sizing
  const renderIcon = (type) => {
    switch (type) {
      case 'stream':
        return (
          <svg className="w-6 h-6 text-brand-accent fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="24" height="24">
            <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        );
      case 'ai-brain':
        return (
          <svg className="w-6 h-6 text-brand-orange fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="24" height="24">
            <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"/>
            <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"/>
          </svg>
        );
      case 'orchestrate':
        return (
          <svg className="w-6 h-6 text-brand-light fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="24" height="24">
            <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
            <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
          </svg>
        );
      case 'security':
        return (
          <svg className="w-6 h-6 text-brand-white fill-current" viewBox="0 0 16 16" aria-hidden="true" width="24" height="24">
            <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
          </svg>
        );
      default:
        return null;
    }
  };


  return (
    <section id="features" className="py-24 px-4 max-w-7xl mx-auto" aria-label="Key Platform Features">
      {/* Title block - Proper Semantic SEO Heading structure */}
      <div className="text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-brand-orange mb-3 block">
          Architecture Deep-Dive
        </span>
        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-brand-white">
          Ingest. Synthesize. Automate.
        </h2>
        <p className="mt-4 text-base md:text-lg text-brand-light/75 max-w-2xl mx-auto">
          We’ve built a highly optimized execution engine that converts dirty raw data into clean, typed, and structured event flows in seconds.
        </p>
      </div>

      {/* Breakpoint Switcher */}
      {isDesktop ? (
        /* DESKTOP BENTO GRID (width >= 1024px) */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {FEATURES_DATA.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onClick={() => setActiveIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveIndex(idx);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label={`Show details for ${item.title}`}
                className={`bento-glow-container card-lift-glow rounded-3xl p-8 border flex flex-col justify-between cursor-pointer select-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${item.gridClass} ${
                  isActive
                    ? 'bg-[#114C5A] border-brand-accent/50 shadow-lg shadow-[#FFC801]/5'
                    : 'bg-[#114C5A]/15 border-brand-light/10 hover:border-brand-light/25'
                }`}
              >
                {/* Upper block */}
                <div className="z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#172B36]/80 rounded-2xl border border-brand-light/5 shadow-inner">
                      {renderIcon(item.iconType)}
                    </div>
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border bg-[#172B36]/50 ${
                      isActive ? 'text-brand-accent border-brand-accent/20' : 'text-brand-light/60 border-brand-light/10'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Elevate heading hierarchy level for cards */}
                  <h3 className="font-mono text-lg font-bold text-brand-white mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-brand-light/75 leading-relaxed">{item.description}</p>
                </div>

                {/* Simulated interactive mini dashboard */}
                <div className="w-full h-12 mt-4 opacity-40 group-hover:opacity-100 transition-opacity rounded-xl border border-brand-light/5 bg-[#172B36]/50 flex items-center justify-between px-4 font-mono text-[10px] text-brand-light/50 select-none overflow-hidden z-10">
                  {item.index === 0 && (
                    <>
                      <span>LIVE WORKERS: 12/12</span>
                      <span className="text-[#FFC801]">➔ 483,192 events total</span>
                    </>
                  )}
                  {item.index === 1 && (
                    <>
                      <span>SCHEMAS INSTANTIATED</span>
                      <span className="text-brand-orange">➔ confidence 1.0</span>
                    </>
                  )}
                  {item.index === 2 && (
                    <>
                      <span>FLOW SUCCESS: 100%</span>
                      <span className="text-brand-light">➔ active cron</span>
                    </>
                  )}
                  {item.index === 3 && (
                    <>
                      <span>SECURITY: SHA-256</span>
                      <span className="text-brand-white">➔ encrypted tunnel</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* MOBILE ACCORDION (width < 1024px) */
        <Accordion
          items={FEATURES_DATA}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </section>
  );
}
