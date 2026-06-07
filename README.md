# Alex Chen — Portfolio (https://lovingpersonliving.github.io/nodejs-porfolio/)

A high-performance, award-winning personal portfolio built with cutting-edge web technologies. Designed to showcase world-class frontend engineering, creative development, and a keen eye for design.

> **"Cyberpunk meets Swiss Design"** — Dark mode palette with electric blue accents, neon highlights, and precision typography. 

---

## Tech Stack

| Category | Technology | Purpose |
| --- | --- | --- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) | React framework with SSR, routing, and image optimization |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS with custom design tokens |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | Declarative animations and page transitions |
| **3D Graphics** | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) | 3D interactive elements in the hero section |
| **Smooth Scroll** | [Lenis](https://github.com/studio-freight/lenis) | Physics-based smooth scrolling |
| **Contact Form** | [Formspree React](https://formspree.io/) | Form handling with validation |
| **Perf Monitoring** | [Web Vitals](https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals) | Core Web Vitals tracking |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type safety and developer experience |

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx        # Root layout with SEO metadata & JSON-LD
│   ├── page.tsx           # Main page — Lenis + cursor + sections
│   └── globals.css        # Design tokens, fonts, utilities
├── components/
│   ├── Navbar.tsx         # Fixed nav with scroll tracking
│   ├── Hero.tsx           # 3D R3F scene + typewriter headlines
│   ├── About.tsx          # Split-screen bio + skills cloud
│   ├── Projects.tsx       # Case study cards + detail modal
│   ├── Experience.tsx     # Alternating timeline
│   ├── Contact.tsx        # Form + social links + availability
│   ├── Footer.tsx         # Social links + copyright
│   └── SectionWrapper.tsx # Reusable scroll-fade section shell
├── data/
│   └── portfolio.ts       # Single source of truth for all content├── hooks/
│   ├── useMagneticCursor.ts # Custom cursor (touch-disabled)
│   └── useTypewriter.ts     # Type/deletion animation hook
├── context/
│   └── LenisContext.tsx      # Lenis instance provider
└── lib/
    └── (extendable)         # Utility functions
```

### Key Design Decisions

1. **Content as Data** — All portfolio content lives in `src/data/portfolio.ts`. Adding/editing projects, skills, or experience requires no component changes.

2. **"use client" Boundaries** — Only interactive components use `"use client"`. The layout and metadata remain server-rendered for optimal SEO.

3. **Accessibility First** — Semantic HTML5, ARIA labels, keyboard navigation, focus management, and skip-to-content link ensure WCAG AA compliance.

4. **Performance** — R3F renders at reduced DPR, animations use `useInView` for lazy entrance, and Lenis uses `requestAnimationFrame`.

5. **Lenis over CSS scroll-behavior** — Lenis provides physics-based inertia scrolling that feels more natural and allows programmatic control.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Content Customization

Edit `src/data/portfolio.ts` to update:

- **Personal info** — Name, bio, tagline, values
- **Headlines** — Typewriter cycling phrases
- **Skills** — Technologies with proficiency levels
- **Projects** — Case studies with descriptions and results
- **Experience** — Work history timeline
- **Social links** — GitHub, LinkedIn, Twitter, Dribbble

### Contact Form

The contact form in `src/components/Contact.tsx` uses the [@formspree/react](https://formspree.io/) `useForm` hook. Replace `YOUR_FORM_ID` with your actual Formspree form ID. The form includes floating labels, client-side validation via Formspree, and a success state with "Send Another Message".

### Project Images

Placeholder SVG thumbnails are in `public/projects/`. Replace them with real project screenshots (optimize with `next/image`). The `<Image>` component is already configured with `fill`, `sizes`, `priority`, and `loading="lazy"` for optimal performance.

### Web Vitals

Performance monitoring via `@/components/WebVitals.tsx` uses `useReportWebVitals` from `next/web-vitals`. In development, metrics log to console. In production, they're sent via `navigator.sendBeacon` to `/api/vitals`.

---

## Design System

### Color Palette

| Token | Value | Usage |
| --- | --- | --- |
| `charcoal` | `#0D0D0F` | Background |
| `electric-blue` | `#0066FF` | Primary accent, CTAs, links |
| `off-white` | `#F5F5F7` | Primary text |
| `muted` | `#A1A1AA` | Secondary text |
| `neon-mint` | `#00FFAA` | Success states, highlights |
| `neon-cyan` | `#00E5FF` | Secondary accent |
| `neon-purple` | `#9945FF` | Tertiary accent |
| `neon-pink` | `#FF2D55` | Error states |

### Typography

- **Headings:** Space Grotesk (300–700 weight)
- **Body:** Inter (300–700 weight)

---

## Performance

- **Lighthouse:** Targeting 100/100 across all categories
- **Core Web Vitals:** LCP < 1s, FID < 50ms, CLS < 0.05
- **R3F:** Reduced DPR `[1, 1.5]` for mobile optimization
- **Animations:** `useInView` prevents off-screen animation rendering
- **Images:** Using Next.js `<Image>` with lazy loading (future enhancement)
- **Web Vitals:** Easy to integrate with `next/web-vitals` for real-world tracking

---

## Accessibility (WCAG AA)

- Semantic HTML5 (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`)
- ARIA labels on all interactive elements
- Keyboard navigation with visible focus indicators
- Skip-to-content link
- Sufficient color contrast ratios
- Screen reader friendly content structure
- `aria-current="page"` on active navigation

---

## SEO

- Comprehensive metadata in `layout.tsx`
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data (Person schema)
- Semantic heading hierarchy
- `robots.txt` friendly

---

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

---

## License

MIT © Alex Chen

---

*Built with precision. Every pixel, every millisecond, every line of code is intentional.*
