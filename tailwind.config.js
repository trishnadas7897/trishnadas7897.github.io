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
        // Premium FinTech / Data-Viz palette.
        // Graphite base = #121417, Mint accent = #00E676. No gold, no navy.
        graphite: {
          950: "#0a0c0f",
          900: "#121417", // spec base background
          800: "#1a1d22",
          700: "#232830",
          600: "#2e333d",
        },
        mint: {
          DEFAULT: "#00E676",
          500: "#00E676",
          400: "#4ce492",
          300: "#80efb4",
          600: "#00b85c",
          glow: "rgba(0, 230, 118, 0.25)",
        },
      },
      fontFamily: {
        sans: ["Inter", "Inter Variable", ...fontFamily.sans],
        display: ["Inter", "Inter Variable", ...fontFamily.sans],
        mono: ["Roboto Mono", "JetBrains Mono", ...fontFamily.mono],
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
        "scan-line": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 8px" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,230,118,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(0,230,118,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 800ms ease-out forwards",
        "scan-line": "scan-line 8s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-mint":
          "linear-gradient(to right, rgba(0,230,118,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,230,118,0.05) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
