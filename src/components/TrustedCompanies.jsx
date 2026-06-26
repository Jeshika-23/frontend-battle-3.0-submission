import React, { useState, useEffect, useRef } from 'react';

/**
 * CountUp - Scroll-triggered counting number animation.
 * Uses requestAnimationFrame with Ease-Out Quad mapping for visual fluidity.
 * Tabular numerals ensure text elements do not shift horizontally while counting.
 */
function CountUp({ end, duration = 1500, suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const endNum = parseFloat(end);
    if (isNaN(endNum)) {
      setCount(end);
      return;
    }
    
    const startTime = performance.now();
    let animationFrameId;
    
    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = progress * (2 - progress); // Ease out quad formula
      const currentCount = easedProgress * endNum;
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(endNum);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, started]);

  const formattedCount = count.toFixed(decimals);
  const displayValue = decimals === 0 
    ? parseInt(formattedCount, 10).toLocaleString('en-US') 
    : formattedCount;

  return (
    <span ref={elementRef} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

/**
 * TrustedCompanies - Seamless scrolling logo marquee + animated KPI performance grid.
 */
export default function TrustedCompanies() {
  const companies = [
    {
      name: 'Acme Corp',
      logo: (
        <svg className="h-5 w-auto text-brand-light/45 fill-current" viewBox="0 0 100 24" width="100" height="24" xmlns="http://www.w3.org/2000/svg" aria-label="Acme Corp logo">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <text x="30" y="17" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono">ACME</text>
        </svg>
      )
    },
    {
      name: 'Cyberdyne Systems',
      logo: (
        <svg className="h-5 w-auto text-brand-light/45 fill-current" viewBox="0 0 120 24" width="120" height="24" xmlns="http://www.w3.org/2000/svg" aria-label="Cyberdyne Systems logo">
          <path d="M5 2 L20 12 L5 22 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="28" y="17" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">CYBERDYNE</text>
        </svg>
      )
    },
    {
      name: 'Globex Inc',
      logo: (
        <svg className="h-5 w-auto text-brand-light/45 fill-current" viewBox="0 0 100 24" width="100" height="24" xmlns="http://www.w3.org/2000/svg" aria-label="Globex Inc logo">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 3 A9 9 0 0 0 12 21 Z" />
          <text x="28" y="17" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono">GLOBEX</text>
        </svg>
      )
    },
    {
      name: 'Hooli Tech',
      logo: (
        <svg className="h-5 w-auto text-brand-light/45 fill-current" viewBox="0 0 90 24" width="90" height="24" xmlns="http://www.w3.org/2000/svg" aria-label="Hooli Tech logo">
          <circle cx="10" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <text x="28" y="17" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono">HOOLI</text>
        </svg>
      )
    },
    {
      name: 'Initech Systems',
      logo: (
        <svg className="h-5 w-auto text-brand-light/45 fill-current" viewBox="0 0 110 24" width="110" height="24" xmlns="http://www.w3.org/2000/svg" aria-label="Initech Systems logo">
          <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M3 11 h16" stroke="currentColor" strokeWidth="1.5" />
          <text x="28" y="17" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">INITECH</text>
        </svg>
      )
    },
    {
      name: 'Tyrell Corp',
      logo: (
        <svg className="h-5 w-auto text-brand-light/45 fill-current" viewBox="0 0 100 24" width="100" height="24" xmlns="http://www.w3.org/2000/svg" aria-label="Tyrell Corp logo">
          <polygon points="12,2 22,20 2,20" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="28" y="17" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono">TYRELL</text>
        </svg>
      )
    }
  ];

  const marqueeItems = [...companies, ...companies];

  return (
    <section
      className="py-12 bg-[#114C5A]/15 border-y border-brand-light/5 overflow-hidden animate-hero-reveal"
      aria-label="Companies who trust AetherFlow"
    >
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-brand-light/50">
          Orchestrating production pipelines for world-class enterprises
        </p>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-12 md:gap-20">
          {marqueeItems.map((comp, idx) => (
            <div
              key={`${comp.name}-${idx}`}
              className="flex-shrink-0 transition-opacity hover:opacity-100 flex items-center"
            >
              {comp.logo}
            </div>
          ))}
        </div>
      </div>

      {/* Platform KPI Metrics Grid (Scroll-observed dynamic counter widgets) */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-12 border-t border-brand-light/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          {/* Active Users */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#114C5A]/10 border border-brand-light/5 hover:border-brand-light/10 transition-all duration-300">
            <div className="text-[#FFC801] p-2 bg-[#FFC801]/5 rounded-lg mb-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="20" height="20">
                <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"/>
                <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"/>
              </svg>
            </div>
            <span className="font-mono text-xl md:text-2xl font-bold text-brand-white">
              <CountUp end={50} suffix="K+" />
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-brand-light/50 mt-1">Active Users</span>
          </div>

          {/* AI Tasks */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#114C5A]/10 border border-brand-light/5 hover:border-brand-light/10 transition-all duration-300">
            <div className="text-brand-orange p-2 bg-brand-orange/5 rounded-lg mb-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="20" height="20">
                <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
                <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <span className="font-mono text-xl md:text-2xl font-bold text-brand-white">
              <CountUp end={12} suffix="M+" />
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-brand-light/50 mt-1">AI Tasks</span>
          </div>

          {/* Platform Uptime */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#114C5A]/10 border border-brand-light/5 hover:border-brand-light/10 transition-all duration-300">
            <div className="text-brand-light p-2 bg-[#114C5A]/30 rounded-lg mb-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="20" height="20">
                <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <span className="font-mono text-xl md:text-2xl font-bold text-brand-white">
              <CountUp end={99.98} decimals={2} suffix="%" />
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-brand-light/50 mt-1">Uptime SLA</span>
          </div>

          {/* Enterprise Customers */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#114C5A]/10 border border-brand-light/5 hover:border-brand-light/10 transition-all duration-300">
            <div className="text-[#FF9932] p-2 bg-[#FF9932]/5 rounded-lg mb-2">
              <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current" aria-hidden="true" width="20" height="20">
                <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
              </svg>
            </div>
            <span className="font-mono text-xl md:text-2xl font-bold text-brand-white">
              <CountUp end={500} suffix="+" />
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-brand-light/50 mt-1">Enterprise Clients</span>
          </div>

        </div>
      </div>
    </section>
  );
}
