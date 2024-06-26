import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'max-sm': {max: '640px'},
      'sm': '640px',
      'md': '768px',
      'max-md': {max: '920px'},
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1439px',
       '3xl': '2560px'
    },
    animation: {
      'fade-in-out': 'fadeInOut 4s ease-in-out infinite',
    },
    keyframes: {
      fadeInOut: {
        '0%, 100%': { opacity: '0' },
        '50%': { opacity: '1' },
      },
    },  
    colors:{
      "dark-silver" : "#6e6e72"
    },
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px', 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
