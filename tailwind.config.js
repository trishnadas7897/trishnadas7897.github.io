import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "#c9a96e",
          light: "#d4b275",
          dark: "#a88c52",
        },
        navy: {
          950: "#04060c",
          900: "#070b15",
          800: "#0a0f1c",
          700: "#0e1525",
          600: "#141c30",
        },
      },
      fontFamily: {
        sans: ["Inter", "Inter Variable", ...fontFamily.sans],
        display: ["Inter", "Inter Variable", ...fontFamily.sans],
        mono: ["JetBrains Mono", ...fontFamily.mono],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 169, 110, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(201, 169, 110, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 800ms ease-out forwards",
        "shimmer": "shimmer 4s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-gold":
          "linear-gradient(to right, rgba(201,169,110,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,169,110,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
