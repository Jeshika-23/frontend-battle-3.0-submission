import React from 'react';

/**
 * Hero - Premium entrance banner utilizing Apple & Linear inspired aesthetics.
 * Renders large typography, button glows, and an animated vector flow blueprint.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden"
      aria-label="Welcome Banner"
    >
      {/* Decorative gradient backdrops */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-[#114C5A] rounded-full blur-[100px] opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-0 right-1/4 w-40 h-40 bg-[#FF9932] rounded-full blur-[120px] opacity-10 pointer-events-none -z-10" />

      {/* Floating Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#114C5A]/40 border border-brand-light/10 text-brand-white mb-6 animate-hero-reveal">
        <span className="w-2 h-2 rounded-full bg-[#FFC801] animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-brand-light/95">
          Version 3.0 Platform Live
        </span>
      </div>

      {/* Primary Headline */}
      <h1 className="font-mono text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-brand-white max-w-4xl leading-[1.08] mb-6 animate-hero-fade">
        AI-Powered Data Automation. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC801] to-[#FF9932]">
          Structured. Encrypted.
        </span>
      </h1>

      {/* Subtitle description */}
      <p className="text-base sm:text-lg md:text-xl text-brand-light/75 max-w-2xl leading-relaxed mb-10 animate-hero-fade delay-200">
        Connect multi-source streams, synthesize complex schemas, and orchestrate self-healing pipelines at scale. Zero servers. Enterprise security.
      </p>

      {/* Action CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-hero-fade delay-400">
        <a
          href="#pricing"
          className="w-full sm:w-auto px-8 py-4 bg-[#FFC801] text-[#172B36] font-bold text-sm md:text-base rounded-xl btn-glow-primary transition-all text-center"
        >
          Start Building Free
        </a>
        <a
          href="#features"
          className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-light/25 hover:border-brand-white text-brand-white font-semibold text-sm md:text-base rounded-xl btn-glow-secondary transition-all text-center"
        >
          Explore Architecture
        </a>
      </div>

      {/* Trust row */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16 text-brand-light/70 font-mono text-xs md:text-sm animate-hero-fade delay-400 select-none">
        <span className="flex items-center gap-1.5">
          <span className="text-[#FFC801] font-bold">✓</span> Enterprise Ready
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#FFC801] font-bold">✓</span> 99.99% Uptime
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#FF9932] font-bold">✓</span> SOC2 Secure
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#FFC801] font-bold">✓</span> Millions of AI Tasks Processed
        </span>
      </div>


      {/* Hero Illustration - Interactive SVG Pipeline Animation with Floating Cards */}
      <div className="w-full max-w-4xl mx-auto relative px-0 md:px-12 animate-hero-reveal delay-400">
        
        {/* Floating Card 1: Ingest Metrics (Left) */}
        <div className="hidden lg:flex absolute -top-8 -left-6 z-20 bg-[#114C5A]/85 backdrop-blur-md border border-[#FFC801]/20 rounded-2xl p-4 shadow-2xl items-center gap-3 select-none hover:border-[#FFC801]/40 transition-colors duration-300">
          <div className="p-2.5 bg-[#FFC801]/10 rounded-xl text-[#FFC801]">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
          </div>
          <div className="text-left font-mono">
            <div className="text-[9px] uppercase tracking-wider text-brand-light/60">LIVE INGEST RATE</div>
            <div className="text-xs font-bold text-brand-white">12,491 req/s</div>
            <div className="text-[9px] text-emerald-400">99.99% operational</div>
          </div>
        </div>

        {/* Floating Card 2: Integration Connector (Right) */}
        <div className="hidden lg:flex absolute -bottom-8 -right-6 z-20 bg-[#172B36]/90 border border-brand-light/10 rounded-2xl p-4 shadow-2xl items-center gap-3 select-none hover:border-[#FF9932]/30 transition-colors duration-300">
          <div className="p-2.5 bg-brand-orange/10 rounded-xl text-brand-orange">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          </div>
          <div className="text-left font-mono">
            <div className="text-[9px] uppercase tracking-wider text-brand-light/60">BRIDGE ENGINE</div>
            <div className="text-xs font-bold text-brand-white">Connected: Snowflake</div>
            <div className="text-[9px] text-[#FFC801]">Handshake TLS 1.3</div>
          </div>
        </div>

        <div className="rounded-3xl border border-brand-light/10 bg-[#114C5A]/10 p-4 md:p-6 backdrop-blur-sm shadow-2xl shadow-black/35">
          <div className="rounded-2xl border border-brand-light/5 bg-[#172B36]/80 overflow-hidden relative">

          
          {/* Header Controls (Mock browser/console style) */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#114C5A]/25 border-b border-brand-light/5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-[#FF9932]/80" />
              <span className="w-3 h-3 rounded-full bg-[#FFC801]/80" />
            </div>
            <div className="font-mono text-[10px] text-brand-light/40">aetherflow-dashboard-v3.0.svg</div>
            <div className="w-12 h-2 bg-brand-light/10 rounded-full" />
          </div>

          {/* Core SVG Diagram */}
          <div className="p-6 md:p-8 flex items-center justify-center min-h-[300px]">
            <svg
              className="w-full max-w-2xl h-auto"
              viewBox="0 0 600 300"
              width="600"
              height="300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Interactive platform pipeline data flow visualization"
            >

              {/* Central Processor Node (Glow Behind) */}
              <circle cx="300" cy="150" r="45" fill="url(#coreGlow)" opacity="0.15" />
              <circle cx="300" cy="150" r="30" fill="#114C5A" stroke="#FFC801" strokeWidth="2.5" className="node-pulse" />
              <text x="300" y="154" fill="#FFC801" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">
                CORE
              </text>

              {/* Source Nodes (Left) */}
              {/* Kafka source */}
              <circle cx="80" cy="70" r="22" fill="#114C5A" stroke="#D9E8E2" strokeWidth="1.5" className="node-pulse-delayed" />
              <text x="80" y="74" fill="#F1F6F4" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">KAFKA</text>

              {/* PostgreSQL Source */}
              <circle cx="80" cy="150" r="22" fill="#114C5A" stroke="#D9E8E2" strokeWidth="1.5" className="node-pulse" />
              <text x="80" y="154" fill="#F1F6F4" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">POSTGRES</text>

              {/* Segment API Source */}
              <circle cx="80" cy="230" r="22" fill="#114C5A" stroke="#D9E8E2" strokeWidth="1.5" className="node-pulse-delayed" />
              <text x="80" y="234" fill="#F1F6F4" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">SEGMENT</text>

              {/* Target Nodes (Right) */}
              {/* Snowflake target */}
              <circle cx="520" cy="90" r="22" fill="#114C5A" stroke="#FF9932" strokeWidth="1.5" className="node-pulse" />
              <text x="520" y="94" fill="#F1F6F4" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">SNOWFLAKE</text>

              {/* AWS S3 target */}
              <circle cx="520" cy="210" r="22" fill="#114C5A" stroke="#FF9932" strokeWidth="1.5" className="node-pulse-delayed" />
              <text x="520" y="214" fill="#F1F6F4" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">AWS S3</text>

              {/* Ingress Connecting Lines (Dashed running) */}
              <path d="M102 70 H 180 L 270 140" stroke="#FFC801" strokeWidth="1.5" className="line-dash" />
              <path d="M102 150 H 270" stroke="#FFC801" strokeWidth="1.5" className="line-dash" />
              <path d="M102 230 H 180 L 270 160" stroke="#FFC801" strokeWidth="1.5" className="line-dash" />

              {/* Egress Connecting Lines (Dashed running) */}
              <path d="M330 140 L 420 90 H 498" stroke="#FF9932" strokeWidth="1.5" className="line-dash" />
              <path d="M330 160 L 420 210 H 498" stroke="#FF9932" strokeWidth="1.5" className="line-dash" />

              {/* Pulsing visual packets */}
              <circle cx="180" cy="70" r="4" fill="#FFC801" className="node-pulse" />
              <circle cx="210" cy="150" r="4" fill="#FFC801" className="node-pulse-delayed" />
              <circle cx="450" cy="90" r="4" fill="#FF9932" className="node-pulse" />
              <circle cx="430" cy="210" r="4" fill="#FF9932" className="node-pulse-delayed" />

              {/* Gradients */}
              <defs>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#FFC801" />
                  <stop offset="100%" stopColor="#114C5A" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Mock Console Console log at bottom */}
          <div className="px-4 py-3 bg-[#114C5A]/15 border-t border-brand-light/5 flex items-center justify-between font-mono text-[9px] md:text-[11px] text-brand-light/50 select-none">
            <div className="flex items-center gap-2">
              <span className="text-[#FFC801]">✓ SECURITY SCAN: SOC2 SUCCESSFUL</span>
              <span className="text-brand-light/30">|</span>
              <span className="text-[#FF9932]">LATENCY: 4.8ms</span>
            </div>
            <div className="hidden sm:block text-brand-light/30">WORKERS ACTIVE: 100%</div>
          </div>
        </div>
      </div>
      </div>
    </section>

  );
}
