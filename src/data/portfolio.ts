// ============================================
// Portfolio Data — Single source of truth
// Edit this file to update all site content
// ============================================

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  role: string;
  client: string;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  liveUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
  level: number; // 0-100
  color: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

// ============================================
// Personal Info
// ============================================
export const personalInfo = {
  name: "Alex Chen",
  tagline: "Creative Developer & Architect",
  email: "alex@alexchendev.com",
  location: "San Francisco, CA",
  available: true,
  bio: {
    short:
      "I craft digital experiences at the intersection of design and engineering — building products that are as beautiful as they are performant.",
    long: `I'm a frontend architect and creative developer with over 8 years of experience building products that millions of people use. I specialize in crafting high-performance web applications, design systems, and interactive experiences that push the boundaries of what's possible in the browser.

My journey began with a fascination for how code could bring motion and life to static designs. That curiosity evolved into a career building everything from enterprise SaaS platforms to award-winning creative experiences.

I believe great software is invisible — it gets out of the way and lets users accomplish their goals effortlessly. Every pixel, every millisecond of performance, and every micro-interaction is intentional.

When I'm not coding, you'll find me contributing to open source, writing about web performance, or exploring the intersection of generative art and technology.`,
  },
  values: [
    {
      title: "Performance First",
      description:
        "Every millisecond matters. I obsess over Core Web Vitals and deliver sub-second load times.",
    },
    {
      title: "Design Integrity",
      description:
        "I bridge the gap between design and engineering, ensuring pixel-perfect implementation.",
    },
    {
      title: "User Empathy",
      description:
        "I build for real people — accessible, intuitive, and delightful experiences.",
    },
  ],
};

// ============================================
// Typewriter Headlines
// ============================================
export const headlines = [
  "Crafting digital experiences",
  "Solving complex problems",
  "Building the future",
  "Designing with code",
  "Engineering delight",
];

// ============================================
// Skills
// ============================================
export const skills: Skill[] = [
  {
    name: "React",
    category: "frontend",
    level: 95,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: 92,
    color: "#3178C6",
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 90,
    color: "#FFFFFF",
  },
  {
    name: "Three.js / R3F",
    category: "frontend",
    level: 85,
    color: "#049EF4",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 95,
    color: "#06B6D4",
  },
  {
    name: "Framer Motion",
    category: "frontend",
    level: 88,
    color: "#FF0055",
  },
  {
    name: "Node.js",
    category: "backend",
    level: 82,
    color: "#339933",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    level: 78,
    color: "#4169E1",
  },
  {
    name: "GraphQL",
    category: "backend",
    level: 80,
    color: "#E10098",
  },
  {
    name: "Rust",
    category: "backend",
    level: 60,
    color: "#DEA584",
  },
  {
    name: "Figma",
    category: "design",
    level: 85,
    color: "#F24E1E",
  },
  {
    name: "Design Systems",
    category: "design",
    level: 90,
    color: "#FFD700",
  },
  {
    name: "WebGL/GLSL",
    category: "design",
    level: 75,
    color: "#9900FF",
  },
  {
    name: "Docker",
    category: "tools",
    level: 80,
    color: "#2496ED",
  },
  {
    name: "AWS",
    category: "tools",
    level: 75,
    color: "#FF9900",
  },
  {
    name: "Git",
    category: "tools",
    level: 92,
    color: "#F05032",
  },
];

// ============================================
// Projects
// ============================================
export const projects: Project[] = [
  {
    id: "quantum-dashboard",
    title: "Quantum Analytics",
    subtitle: "Real-time financial intelligence platform",
    description:
      "A high-frequency trading dashboard processing 2M+ events per second with sub-millisecond rendering.",
    thumbnail: "/projects/quantum-thumb.svg",
    images: ["/projects/quantum-thumb.svg"],
    technologies: [
      "React",
      "TypeScript",
      "WebSocket",
      "D3.js",
      "Web Workers",
    ],
    role: "Lead Frontend Architect",
    client: "Fortune 500 Fintech",
    problem:
      "Traders needed to visualize millions of real-time data points without lag. Existing solutions had 2-3 second delays that cost millions in missed opportunities.",
    solution:
      "Architected a Web Worker-based data pipeline with virtualized rendering, achieving real-time visualization of 2M+ events/second. Implemented custom WebGL charts for GPU-accelerated rendering.",
    results: [
      { label: "Latency Reduction", value: "99.7%" },
      { label: "Data Throughput", value: "2M+ events/s" },
      { label: "User Adoption", value: "10K+ traders" },
    ],
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: "aurora-design",
    title: "Aurora Design System",
    subtitle: "Enterprise-scale component library",
    description:
      "A comprehensive design system powering 40+ products across a Fortune 100 company.",
    thumbnail: "/projects/aurora-thumb.svg",
    images: ["/projects/aurora-thumb.svg"],
    technologies: [
      "React",
      "Storybook",
      "TypeScript",
      "CSS-in-JS",
      "Chromatic",
    ],
    role: "Design Systems Architect",
    client: "Fortune 100 Enterprise",
    problem:
      "40+ product teams were building inconsistent UIs with duplicated effort. Accessibility was an afterthought and design-to-code handoff was broken.",
    solution:
      "Built a token-based design system with 200+ components, automated visual regression testing, and a Figma plugin that generated production-ready code.",
    results: [
      { label: "Development Speed", value: "3x faster" },
      { label: "Components", value: "200+" },
      { label: "WCAG Compliance", value: "AA across all" },
    ],
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: "neural-canvas",
    title: "Neural Canvas",
    subtitle: "AI-powered creative tool",
    description:
      "An experimental creative coding platform that combines machine learning with real-time graphics.",
    thumbnail: "/projects/neural-thumb.svg",
    images: ["/projects/neural-thumb.svg"],
    technologies: [
      "Next.js",
      "Three.js",
      "TensorFlow.js",
      "WebGL",
      "Framer Motion",
    ],
    role: "Creative Technologist",
    client: "Personal Project",
    problem:
      "Artists and designers lacked intuitive tools to explore generative AI in a visual, real-time environment.",
    solution:
      "Created a browser-based platform combining Stable Diffusion with real-time WebGL shaders. Users can sketch and see AI-enhanced results instantly.",
    results: [
      { label: "GitHub Stars", value: "4.2K" },
      { label: "Monthly Users", value: "15K+" },
      { label: "Award", value: "Awwwards SOTD" },
    ],
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: "prism-ecommerce",
    title: "Prism Storefront",
    subtitle: "Headless commerce platform",
    description:
      "A blazing-fast headless commerce frontend with edge-rendering and sub-second page loads.",
    thumbnail: "/projects/prism-thumb.svg",
    images: ["/projects/prism-thumb.svg"],
    technologies: [
      "Next.js",
      "Shopify",
      "Edge Functions",
      "Tailwind",
      "Radix UI",
    ],
    role: "Frontend Lead",
    client: "D2C Fashion Brand",
    problem:
      "The client's legacy storefront had 6+ second load times and a 2% conversion rate. Mobile performance was especially poor.",
    solution:
      "Rebuilt with Next.js App Router and edge rendering. Implemented aggressive code splitting, image optimization, and a custom design system.",
    results: [
      { label: "Load Time", value: "0.8s (from 6s)" },
      { label: "Conversion", value: "+180%" },
      { label: "Lighthouse", value: "100/100" },
    ],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
  },
];

// ============================================
// Experience
// ============================================
export const experiences: Experience[] = [
  {
    id: "stripe",
    company: "Stripe",
    logo: "/logos/stripe.svg",
    role: "Senior Frontend Engineer",
    period: "2022 — Present",
    description:
      "Leading frontend architecture for Stripe Dashboard, serving millions of businesses worldwide.",
    achievements: [
      "Architected new dashboard experience reducing page load by 40%",
      "Led migration from legacy REST to GraphQL across 12 teams",
      "Built internal design system used by 200+ engineers",
      "Mentored 6 junior engineers through formal onboarding program",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "Ruby", "AWS"],
  },
  {
    id: "vercel",
    company: "Vercel",
    logo: "/logos/vercel.svg",
    role: "Frontend Engineer",
    period: "2020 — 2022",
    description:
      "Core platform team building the Vercel dashboard and developer experience.",
    achievements: [
      "Shipped Next.js Conf 2021 interactive experience (50K+ attendees)",
      "Built real-time deployment monitoring with WebSocket streaming",
      "Reduced deployment page load time from 3s to 400ms",
      "Created open-source analytics SDK (2K+ GitHub stars)",
    ],
    technologies: ["Next.js", "React", "SWR", "Node.js", "PostgreSQL"],
  },
  {
    id: "agency",
    company: "Digital Studio Co.",
    logo: "/logos/studio.svg",
    role: "Creative Developer",
    period: "2018 — 2020",
    description:
      "Award-winning digital agency crafting immersive web experiences for global brands.",
    achievements: [
      "Won 3 Awwwards for interactive brand experiences",
      "Built WebGL-powered product configurator (1M+ sessions)",
      "Led frontend for Nike campaign microsite (5M+ visits)",
      "Introduced modern frontend stack (React/Next.js) to the agency",
    ],
    technologies: ["React", "Three.js", "GSAP", "WebGL", "Figma"],
  },
  {
    id: "freelance",
    company: "Independent",
    logo: "/logos/freelance.svg",
    role: "Frontend Developer",
    period: "2016 — 2018",
    description:
      "Full-stack freelance developer building web apps and interactive experiences.",
    achievements: [
      "Delivered 20+ client projects with 100% satisfaction rate",
      "Built real-time collaboration tool for architecture firm",
      "Contributed to 5 open-source projects (3K+ total stars)",
      "Published technical articles reaching 100K+ readers",
    ],
    technologies: ["React", "Vue.js", "Node.js", "MongoDB", "Webpack"],
  },
];

// ============================================
// Social Links
// ============================================
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    label: "GitHub",
    url: "https://github.com",
    icon: "github",
    ariaLabel: "View GitHub profile",
  },
  {
    platform: "LinkedIn",
    label: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
    ariaLabel: "Connect on LinkedIn",
  },
  {
    platform: "Twitter",
    label: "X / Twitter",
    url: "https://twitter.com",
    icon: "twitter",
    ariaLabel: "Follow on X",
  },
  {
    platform: "Dribbble",
    label: "Dribbble",
    url: "https://dribbble.com",
    icon: "dribbble",
    ariaLabel: "View design work on Dribbble",
  },
];

// ============================================
// Navigation
// ============================================
export const navigation = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
