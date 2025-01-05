import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E5E5E0",
          foreground: "#312F2B",
        },
        secondary: {
          light: "#D3C1B6",
          DEFAULT: "#BAB6AA",
          foreground: "#312F2B",
        },
        text: {
          heading: "#312F2B",
          body: "#272525",
        },
      },
      fontFamily: {
        gelasio: ["Gelasio", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;