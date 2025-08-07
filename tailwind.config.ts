// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = ({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tus colores personalizados
        primary: "#b60000",
        secondary: "#f6f4ee",
        card: "#f1efe9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Otros estilos que hayas extendido
    },
  },
  plugins: [
    // Tus plugins personalizados
  ],
});

export default config;
