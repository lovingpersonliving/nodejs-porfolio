import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk meets Swiss Design palette
        charcoal: {
          DEFAULT: "#0D0D0F",
          100: "#1A1A1E",
          200: "#222228",
          300: "#2A2A32",
          400: "#33333D",
        },
        "electric-blue": {
          DEFAULT: "#0066FF",
          100: "#E6F0FF",
          200: "#B3D4FF",
          300: "#80B8FF",
          400: "#4D9CFF",
          500: "#1A80FF",
          600: "#0066FF",
          700: "#0052CC",
          800: "#003D99",
          900: "#002966",
        },
        "off-white": {
          DEFAULT: "#F5F5F7",
          100: "#FFFFFF",
          200: "#F5F5F7",
          300: "#E8E8ED",
          400: "#D2D2D7",
        },
        neon: {
          mint: "#00FFAA",
          cyan: "#00E5FF",
          purple: "#9945FF",
          pink: "#FF2D55",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        typewriter: "typewriter 3s steps(40) infinite",
        "magnetic-enter": "magneticEnter 0.3s ease-out forwards",
        "magnetic-leave": "magneticLeave 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 20px rgba(0, 102, 255, 0.3)",
          },
          "100%": {
            boxShadow: "0 0 40px rgba(0, 102, 255, 0.6), 0 0 80px rgba(0, 229, 255, 0.3)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "grid-lg": "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
