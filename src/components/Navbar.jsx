import React, { useState, useEffect, useRef } from 'react';

/**
 * Navbar - Sticky header featuring glassmorphism, scroll-based backdrop blur,
 * and an interactive mobile drawer menu.
 * Optimized for performance and high-level accessibility.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const mobileMenuRef = useRef(null);
  const triggerButtonRef = useRef(null);

  // 1. Passive scroll listener for performance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // 3. Listen for Escape key to close the mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // 4. Focus Trap for Mobile Drawer Menu
  useEffect(() => {
    if (!isMobileMenuOpen) {
      // Focus returns to the trigger button when closed
      triggerButtonRef.current?.focus();
      return;
    }

    const menu = mobileMenuRef.current;
    if (!menu) return;

    // Find all focusable elements inside the drawer
    const focusable = menu.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const firstEl = focusable[0];
    const lastEl = focusable[focusable.length - 1];

    // Set initial focus to the first element
    firstEl.focus();

    const handleFocusTrap = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab: wrap from first back to last
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        // Tab: wrap from last forward to first
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    menu.addEventListener('keydown', handleFocusTrap);
    return () => {
      menu.removeEventListener('keydown', handleFocusTrap);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      {/* Keyboard Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FFC801] text-[#172B36] px-4 py-2 rounded-lg font-mono text-xs font-bold z-[100] outline-none"
      >
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#172B36]/85 backdrop-blur-md border-b border-brand-light/5 py-4 shadow-lg shadow-black/10'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
        aria-label="Global navigation"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group font-mono text-brand-white focus:outline-none"
            aria-label="AetherFlow Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-[#FFC801] flex items-center justify-center text-[#172B36] transition-transform duration-300 group-hover:rotate-12 shadow shadow-brand-accent/20 p-1.5">
              <svg viewBox="0 0 16 16" className="w-full h-full fill-current" aria-hidden="true" width="16" height="16">
                <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight">
              Aether<span className="text-[#FFC801]">Flow</span>
            </span>
          </a>


          {/* Desktop Menu links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs md:text-sm font-medium text-brand-light/75 hover:text-brand-white transition-colors duration-150 relative py-2 focus:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              className="text-xs md:text-sm font-semibold text-brand-white/80 hover:text-brand-white px-4 py-2 hover:bg-brand-white/5 rounded-lg transition-colors duration-150"
            >
              Sign In
            </button>
            <button
              type="button"
              className="bg-[#FFC801] text-[#172B36] text-xs md:text-sm font-bold px-4 py-2 rounded-lg btn-glow-primary transition-all"
            >
              Start Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={triggerButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-light hover:text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true" width="24" height="24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true" width="24" height="24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Drawer (overlay slide down) */}
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation drawer"
          className={`md:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-[#172B36] border-t border-brand-light/5 transition-all duration-300 z-40 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col p-6 gap-6 h-full justify-between pb-12">
            <ul className="flex flex-col gap-4" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-mono font-medium text-brand-light/85 hover:text-brand-white border-b border-brand-light/5 py-3 focus:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="w-full py-3.5 border border-brand-light/10 text-brand-white rounded-xl text-center font-semibold text-sm hover:bg-brand-white/5 transition-colors focus:outline-none"
              >
                Sign In
              </button>
              <button
                type="button"
                className="w-full py-3.5 bg-[#FFC801] text-[#172B36] font-bold rounded-xl text-center text-sm shadow-md focus:outline-none"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
