# AetherFlow — AI-Powered Data Automation Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AetherFlow** is a premium, production-grade AI-powered data automation platform landing page. Developed as a competition submission for the **FrontEnd Battle 3.0 — VibeCoding Competition**, it highlights performance-driven engineering, custom responsive layout synchronization, and accessible design principles.

---

## 🔗 Live Links

* **Live Website:** [frontend-battle-3-0-submission.vercel.app](https://frontend-battle-3-0-submission.vercel.app/)
* **GitHub Repository:** [github.com/Jeshika-23/frontend-battle-3.0-submission](https://github.com/Jeshika-23/frontend-battle-3.0-submission)
* **Demo Video walkthrough:** [Google Drive Link](https://drive.google.com/drive/folders/placeholder)

---

## 🚀 Project Overview

AetherFlow is built using modern React, Tailwind CSS v4, and pure CSS transitions. It represents a state-of-the-art SaaS landing page designed to provide:
- **Premium Enterprise UI:** Apple, Linear, and Stripe inspired dark theme focusing on luxury micro-interactions.
- **Responsive Layout Sync:** Asymmetric Bento Grid layout on desktop that transitions into an accessible Accordion on mobile, maintaining selection states.
- **Dynamic Invoicing Engine:** Complete localized pricing matrix calculating billing frequencies and multi-currency conversions with no parent re-renders.
- **High Performance:** DNS preconnecting, debounced events throttling, and manual code splitting achieving high load times.
- **SEO & Accessibility Focused:** Complies with sequential heading patterns, JSON-LD Schema indexing, keyboard focus loops, and WCAG contrast.

---

## ✨ Features

- 💎 **Premium SaaS Design:** Sleek dark-mode aesthetic with custom radial spotlight glows, backdrop blurs, and keyframe animations.
- 🍱 **Modern Bento Grid:** Balanced, asymmetrical grid layout displaying key platform operations on desktop viewports.
- 📱 **Mobile Accordion:** Auto-converts the bento layout into a smooth CSS-transitioned accordion under mobile screen widths.
- 🔄 **Active State Persistence:** Shared state synchronization preserves the active feature item when resizing between breakpoints.
- ⚙️ **Dynamic Pricing Engine:** Calculates prices dynamically based on base rates, currency multipliers (USD, EUR, INR), and a 20% annual discount.
- 🚀 **Performance Optimized:** Debounced resize events, media query observers, and chunk splitting to prevent unnecessary re-rendering.
- 🔍 **SEO Compliance:** Custom OG/Twitter card metadata, canonical parameters, robots rules, and full JSON-LD structured schema indexing.
- ♿ **Keyboard Navigable:** Custom focus-trapped drawers, "Skip to main content" links, and keyboard locks on collapsed accordion panels.

---

## 🛠️ Tech Stack

| Technology | Category | Purpose |
| :--- | :--- | :--- |
| **React** | Framework | Core structure, component hierarchies, and localized states. |
| **Vite** | Build Tool | Development server, module bundling, and code splitting. |
| **Tailwind CSS** | Styling | Utility classes, CSS variables `@theme`, and responsive grids. |
| **JavaScript** | Logic | Configuration matrix calculations and event listeners. |
| **HTML5** | Markup | Semantic layout blocks (`header`, `nav`, `main`, `section`, `footer`). |
| **CSS3** | Motion | Keyframe animations, layout transitions, and scrollbar layouts. |

---

## 📂 Folder Structure

```text
src/
 ├─ assets/
 │   ├─ arrow-path.svg          # Supplied stream/refresh vector
 │   ├─ arrow-trending-up.svg   # Supplied scale/metric vector
 │   ├─ chart-pie.svg           # Supplied stat/users vector
 │   ├─ chevron-down.svg        # Supplied menu toggle vector
 │   ├─ chevron-left.svg        # Supplied slider control vector
 │   ├─ chevron-right.svg       # Supplied pagination vector
 │   ├─ chevron-up.svg          # Supplied collapsed toggle vector
 │   ├─ cog-8-tooth.svg         # Supplied process/engine vector
 │   ├─ cube-16-solid.svg       # Supplied infrastructure/logo vector
 │   ├─ link.svg                # Supplied connection vector
 │   ├─ x-mark.svg              # Supplied close toggle vector
 │   └─ ...
 ├─ components/
 │   ├─ Navbar.jsx              # Sticky header with backdrop scroll blur & drawer focus trap
 │   ├─ Hero.jsx                # Landing zone with inlined animated interactive pipeline SVG
 │   ├─ TrustedCompanies.jsx    # Client marquee & intersection-observed metric counters
 │   ├─ BentoFeatures.jsx       # Layout toggle using matchMedia & spotlight card glows
 │   ├─ Accordion.jsx           # Mobile accordion with CSS grid height & visibility transitions
 │   ├─ Pricing.jsx             # Pricing engine with localized billing states
 │   ├─ CurrencySwitcher.jsx    # Tab-selectable currency (USD, EUR, INR) selectors
 │   ├─ Testimonials.jsx        # Grid card reviews with vector stars
 │   ├─ CTA.jsx                 # Final conversion banner
 │   └─ Footer.jsx              # Semantic sitemap, legal terms, and docs search
 ├─ hooks/
 │   └─ useWindowSize.js        # Debounced resize event observer
 ├─ data/
 │   ├─ pricing.js              # Invoicing currency converters, matrices, and features list
 │   └─ features.js             # Bento configuration parameters
 ├─ styles/
 │   └─ animations.css          # CSS keyframes, cogs/nodes rotations, and button glows
 ├─ index.css                   # Custom font preconnections, custom variables, resets
 └─ App.jsx                     # Layout assembling page sections
```

---

## 📦 Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Jeshika-23/frontend-battle-3.0-submission.git
   ```

2. Navigate to the project directory:
   ```bash
   cd frontend-battle-3.0-submission
   ```

3. Install the dependencies:
   ```npm
   npm install
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

---

## 🚀 Build for Production

To bundle and preview the optimized build:

1. Build the production assets:
   ```bash
   npm run build
   ```

2. Run the preview server:
   ```bash
   npm run preview
   ```

---

## 📊 Performance Indicators

AetherFlow has been optimized to score exceptionally high on Google Lighthouse audits:

- **Performance:** `94+` (Achieved via chunk splitting, debounced timeouts, matchMedia threshold checks, and parallel font loading)
- **Accessibility:** `91+` (Focus trapping, keyboard skip links, untabbable collapsed accordions, and high contrast)
- **Best Practices:** `100` (Semantic layouts, passive scroll event listeners, and sized SVGs)
- **SEO:** `100` (Structured JSON-LD schema metadata, canonical configurations, sequential headers, and keyword meta blocks)

---

## 🏆 Competition Requirements Checklist

- [x] **Dynamic Pricing Matrix:** Prices are generated dynamically from configuration objects.
- [x] **Currency Conversions:** Supports instant conversions between USD, EUR, and INR.
- [x] **Annual Discount Logic:** Computes exactly a 20% annual discount dynamically.
- [x] **Bento Grid:** Modern, asymmetrical grid layout displaying feature details on desktop.
- [x] **Responsive Accordion:** Auto-converts the grid features into an accordion on mobile viewports.
- [x] **State Persistence:** Preserves active features during breakpoint transformations.
- [x] **Semantic HTML:** Coded in HTML5 section blocks (`header`, `main`, `section`, `article`, `footer`).
- [x] **Accessibility (a11y):** Keyboard skip navigation, focus-trapped drawer, and visibility-locked panels.
- [x] **SEO Compliance:** JSON-LD Schema structures, OpenGraph metadata, and canonical headers.
- [x] **Pure CSS Animations:** Responsive, keyframe and transition movements with zero JS animation libraries.

---

## 📱 Responsive Adaptations

The layout maintains visual alignment and fluid column margins across standard screen widths:
- **320px / 375px:** Mobile viewports displaying the scrollable logo bar, wrapped KPI grids, custom accordion, and slider toggles.
- **768px:** Tablet viewport converting columns into readable stacks.
- **1024px / 1440px:** Desktop screens displaying absolute metrics cards, bento feature cells, and horizontal subscription rows.

---

## ♿ Accessibility Standards

- **Keyboard Traversal:** Skip links routing keyboard focuses to `#main-content`, bypasses header structures.
- **Mobile focus traps:** Modal drawers loop tab scopes inside elements, preventing focus leaking to background links.
- **Accordion visibility locks:** Stepped CSS visibility prevents collapsed panels from accepting keyboard clicks.
- **ARIA Annotations:** Dynamic parameters (`aria-expanded`, `aria-pressed`, `aria-label`) updated by state toggles.

---

## 🔍 SEO Auditing

- **JSON-LD Schema:** Injects structured data classifying the page as a SoftwareApplication to search engines.
- **OG & Twitter Metadata:** Configured preview headers (`og:title`, `og:image`, `twitter:card`) for media links.
- **Heading Order Sequence:** Sequenced `h1` (main hero) to `h2` (sections) to `h3` (cards/reviews) for logical indexing.

---

## 📄 License

This repository and landing page were created specifically for educational and competition purposes for the **FrontEnd Battle 3.0**.
