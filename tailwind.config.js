/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#051424",
        foreground: "#d4e4fa",

        primary: {
          DEFAULT: "#dbfcff",
          foreground: "#00363a",
          container: "#00f0ff",
          fixed: "#7df4ff",
          "fixed-dim": "#00dbe9",
        },

        surface: {
          DEFAULT: "#051424",
          dim: "#051424",
          bright: "#2c3a4c",
          tint: "#00dbe9",
          variant: "#273647",
          container: "#122131",
          low: "#0d1c2d",
          lowest: "#010f1f",
          high: "#1c2b3c",
          highest: "#273647",
        },

        accent: {
          DEFAULT: "#00F0FF",
          electric: "#00F0FF",
          glow: "#00dbe9",
          neutral: "#94A3B8",
          secondary: "#1A2333",
          tertiary: "#0A0F1E",
        },

        secondary: {
          DEFAULT: "#bec7dc",
          foreground: "#283141",
          container: "#40495b",
        },

        tertiary: {
          DEFAULT: "#f5f5ff",
          foreground: "#2b3040",
          container: "#d4d8ee",
        },

        outline: {
          DEFAULT: "#849495",
          variant: "#3b494b",
        },

        muted: {
          DEFAULT: "#273647",
          foreground: "#b9cacb",
        },

        error: {
          DEFAULT: "#ffb4ab",
          foreground: "#690005",
          container: "#93000a",
        },
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        1: "4px",
        2: "8px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 240, 255, 0.24), 0 0 12px rgba(0, 219, 233, 0.18)",
      },
    },
  },
  plugins: [],
};
