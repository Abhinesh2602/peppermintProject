/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peppermint: {
          // Dark background colors
          900: "#1a1e1f", // Main background
          800: "#232829", // Card/section background
          700: "#2a3132", // Hover states

          // Text and foreground colors
          100: "#ffffff", // Primary text
          200: "#94a3b8", // Secondary text
          300: "#64748b", // Muted text
          400: "#6ca0a0", //text Tertiary

          // Accent colors
          accent: {
            DEFAULT: "#26C6DA", // Bright cyan accent
            hover: "#0ea5e9",
          },
        },

        // Status colors
        status: {
          success: "#10b981", // Green for positive states
          warning: "#f59e0b", // Amber for warnings
          error: "#ef4444", // Red for errors
        },
      },

      // Border radius
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.5rem",
      },

      // Font settings
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      // Custom spacing
      spacing: {
        panel: "1.5rem",
      },

      // Box shadow
      boxShadow: {
        card: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
