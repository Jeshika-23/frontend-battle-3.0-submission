/**
 * Features Data Configuration
 * Used for both the Desktop Bento Grid and the Mobile Accordion components.
 */
export const FEATURES_DATA = [
  {
    id: 'feature-1',
    index: 0,
    title: 'Real-Time Ingest Stream',
    badge: 'Core Engine',
    description: 'Ingest multi-source streams dynamically. Process up to 100k events/sec with zero latency, zero buffers, and automated flow controls.',
    // Tailwind grid dimensions for desktop bento grid
    gridClass: 'lg:col-span-2 lg:row-span-1',
    // SVG Path or Visual Blueprint representation
    iconType: 'stream',
    colorClass: 'text-brand-accent border-brand-accent/20',
  },
  {
    id: 'feature-2',
    index: 1,
    title: 'AI Schema Synthesis',
    badge: 'Intelligence',
    description: 'Synthesize heterogeneous datasets instantly. Auto-detect models, generate types, and enforce field structures dynamically.',
    gridClass: 'lg:col-span-1 lg:row-span-1',
    iconType: 'ai-brain',
    colorClass: 'text-brand-orange border-brand-orange/20',
  },
  {
    id: 'feature-3',
    index: 2,
    title: 'Flow Orchestration',
    badge: 'Automation',
    description: 'Build complex automation flows visually or via declarative code. Complete with scheduling, retries, backoffs, and failure notifications.',
    gridClass: 'lg:col-span-1 lg:row-span-1',
    iconType: 'orchestrate',
    colorClass: 'text-brand-light border-brand-light/30',
  },
  {
    id: 'feature-4',
    index: 3,
    title: 'Enterprise Trust & SLA',
    badge: 'Governance',
    description: 'Protect flows with end-to-end encryption, role-based access, and SOC2-compliant clusters. Backed by guaranteed 99.99% uptime SLA.',
    gridClass: 'lg:col-span-2 lg:row-span-1',
    iconType: 'security',
    colorClass: 'text-brand-white border-brand-white/10',
  },
];
