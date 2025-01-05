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
          DEFAULT: "#282824",
          foreground: "#312F2B",
        },
        secondary: {
          light: "#E8E4DD",
          DEFAULT: "#DED8CD",
          foreground: "#312F2B",
        },
        text: {
          heading: "#312F2B",
          body: "#272525",
        },
        background: {
          DEFAULT: "#EFECE6",
          page: "#DDD6CC",
        }
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        rockSalt: ["Rock Salt", "cursive"],
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(109.6deg, #DDD6CC 11.2%, #EFECE6 91.1%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;