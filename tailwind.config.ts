import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "hero-slide": "hero-slide 20s infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "hero-slide": {
          "0%, 20%": { transform: "translateX(0)" },
          "25%, 45%": { transform: "translateX(-25%)" },
          "50%, 70%": { transform: "translateX(-50%)" },
          "75%, 95%": { transform: "translateX(-75%)" },
          "100%": { transform: "translateX(0)" }
        }
      },
      colors: {
        "apple-primary": "#1A365D",
        "apple-primary-focus": "#2C5282",
        "apple-primary-on-dark": "#63B3ED",
        "apple-ink": "#1d1d1f",
        "apple-body": "#1d1d1f",
        "apple-body-on-dark": "#ffffff",
        "apple-body-muted": "#cccccc",
        "apple-ink-muted-80": "#333333",
        "apple-ink-muted-48": "#7a7a7a",
        "apple-divider-soft": "#f0f0f0",
        "apple-hairline": "#e0e0e0",
        "apple-canvas": "#ffffff",
        "apple-canvas-parchment": "#f5f5f7",
        "apple-surface-pearl": "#fafafc",
        "apple-surface-tile-1": "#0A2540",
        "apple-surface-tile-2": "#112F4E",
        "apple-surface-tile-3": "#1A3B5C",
        "apple-surface-black": "#000000",
        "apple-surface-chip-translucent": "#d2d2d7",
        
        // Material tokens
        "inverse-primary": "#bec6e0",
        "inverse-on-surface": "#eaf1ff",
        "tertiary-fixed": "#dde3eb",
        "background": "#f8f9ff",
        "on-background": "#0b1c30",
        "on-secondary-fixed": "#281900",
        "inverse-surface": "#213145",
        "on-secondary-container": "#78581c",
        "surface-container": "#e5eeff",
        "surface-container-high": "#dce9ff",
        "tertiary-fixed-dim": "#c1c7cf",
        "surface-container-highest": "#d3e4fe",
        "on-primary": "#ffffff",
        "secondary-fixed": "#ffdeac",
        "surface-tint": "#565e74",
        "on-primary-fixed-variant": "#3f465c",
        "on-error": "#ffffff",
        "secondary-container": "#fdd089",
        "tertiary": "#000000",
        "primary-fixed-dim": "#bec6e0",
        "on-primary-fixed": "#131b2e",
        "surface-dim": "#cbdbf5",
        "primary": "#000000",
        "surface-container-lowest": "#ffffff",
        "surface": "#f8f9ff",
        "error": "#ba1a1a",
        "on-primary-container": "#7c839b",
        "primary-fixed": "#dae2fd",
        "on-tertiary-fixed": "#161c22",
        "on-surface-variant": "#45464d",
        "outline": "#76777d",
        "on-tertiary-container": "#7e848c",
        "on-surface": "#0b1c30",
        "tertiary-container": "#161c22",
        "on-tertiary": "#ffffff",
        "surface-container-low": "#eff4ff",
        "outline-variant": "#c6c6cd",
        "error-container": "#ffdad6",
        "secondary": "#79591d",
        "on-error-container": "#93000a",
        "secondary-fixed-dim": "#ebc07a",
        "on-secondary-fixed-variant": "#5f4105",
        "surface-bright": "#f8f9ff",
        "primary-container": "#131b2e",
        "surface-variant": "#d3e4fe",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed-variant": "#41474e"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem",
        "apple-none": "0px",
        "apple-xs": "5px",
        "apple-sm": "8px",
        "apple-md": "11px",
        "apple-lg": "18px",
        "apple-pill": "9999px",
        "apple-full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "margin-desktop": "64px",
        "container-max": "1440px",
        "gutter": "32px",
        "section-gap": "128px",
        "apple-xxs": "4px",
        "apple-xs": "8px",
        "apple-sm": "12px",
        "apple-md": "17px",
        "apple-lg": "24px",
        "apple-xl": "32px",
        "apple-xxl": "48px",
        "apple-section": "80px"
      },
      fontFamily: {
        "apple-display": ["system-ui", "-apple-system", "BlinkMacSystemFont", "Inter", "sans-serif"],
        "apple-text": ["system-ui", "-apple-system", "BlinkMacSystemFont", "Inter", "sans-serif"],
        // Material
        "headline-md": ["var(--font-source-serif-4)", "serif"],
        "body-lg": ["var(--font-hanken-grotesk)", "sans-serif"],
        "body-md": ["var(--font-hanken-grotesk)", "sans-serif"],
        "title-lg": ["var(--font-hanken-grotesk)", "sans-serif"],
        "label-md": ["var(--font-hanken-grotesk)", "sans-serif"],
        "display-lg": ["var(--font-source-serif-4)", "serif"],
        "headline-lg": ["var(--font-source-serif-4)", "serif"]
      },
      fontSize: {
        "apple-hero-display": ["56px", { "lineHeight": "1.07", "letterSpacing": "-0.28px", "fontWeight": "600" }],
        "apple-display-lg": ["40px", { "lineHeight": "1.1", "letterSpacing": "0px", "fontWeight": "600" }],
        "apple-display-md": ["34px", { "lineHeight": "1.47", "letterSpacing": "-0.374px", "fontWeight": "600" }],
        "apple-lead": ["28px", { "lineHeight": "1.14", "letterSpacing": "0.196px", "fontWeight": "400" }],
        "apple-lead-airy": ["24px", { "lineHeight": "1.5", "letterSpacing": "0px", "fontWeight": "300" }],
        "apple-tagline": ["21px", { "lineHeight": "1.19", "letterSpacing": "0.231px", "fontWeight": "600" }],
        "apple-body-strong": ["17px", { "lineHeight": "1.24", "letterSpacing": "-0.374px", "fontWeight": "600" }],
        "apple-body": ["17px", { "lineHeight": "1.47", "letterSpacing": "-0.374px", "fontWeight": "400" }],
        "apple-caption": ["14px", { "lineHeight": "1.43", "letterSpacing": "-0.224px", "fontWeight": "400" }],
        "apple-button": ["18px", { "lineHeight": "1.0", "letterSpacing": "0px", "fontWeight": "300" }],
        // Material
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "title-lg": ["20px", { "lineHeight": "1.5", "letterSpacing": "0.01em", "fontWeight": "600" }],
        "label-md": ["14px", { "lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-lg": ["48px", { "lineHeight": "1.2", "fontWeight": "600" }]
      }
    }
  },
  plugins: [],
};
export default config;
