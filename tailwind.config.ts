import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a1628",
        navy2: "#0f2044",
        blue: {
          DEFAULT: "#1356e8",
          2: "#4c84ff",
        },
        cyan: "#00d4ff",
        amber: "#ffb800",
        gray50: "#f4f6fb",
        gray100: "#e8ecf4",
        gray400: "#8898b8",
        gray600: "#4a5a7a",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(160deg, #0a1628 0%, #0f2044 60%, #0d1e3d 100%)",
        "blue-gradient":
          "linear-gradient(135deg, #1356e8 0%, #0d3dba 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
