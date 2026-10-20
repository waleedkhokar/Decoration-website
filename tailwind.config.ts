import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101010",        // deep charcoal
        coal: "#181818",       // section dark
        ivory: "#FAF7F1",      // warm light
        cream: "#F3EEE4",      // secondary light
        gold: "#C8A24B",       // brand gold
        golddark: "#9C7B2D",
        muted: "#8A8578",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
