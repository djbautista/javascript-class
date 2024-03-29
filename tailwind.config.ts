import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro-banner':
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/intro-banner.png'), linear-gradient(0deg, rgb(32, 32, 32), rgb(32, 32, 32))",
      },
      animation: {
        spin: 'spin 5s ease-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
