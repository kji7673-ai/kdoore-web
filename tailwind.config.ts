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
      colors: {
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
        "full": "0.75rem"
      },
      spacing: {
        "unit": "8px",
        "margin-desktop": "64px",
        "container-max": "1440px",
        "gutter": "32px",
        "section-gap": "128px"
      },
      fontFamily: {
        "headline-md": ["var(--font-source-serif-4)", "serif"],
        "body-lg": ["var(--font-hanken-grotesk)", "sans-serif"],
        "body-md": ["var(--font-hanken-grotesk)", "sans-serif"],
        "title-lg": ["var(--font-hanken-grotesk)", "sans-serif"],
        "label-md": ["var(--font-hanken-grotesk)", "sans-serif"],
        "display-lg": ["var(--font-source-serif-4)", "serif"],
        "headline-lg": ["var(--font-source-serif-4)", "serif"]
      },
      fontSize: {
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
