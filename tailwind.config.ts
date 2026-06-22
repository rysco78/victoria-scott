import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#ffc42e',
        body: '#141618',
      },
      fontFamily: {
        'permanent-marker': ['var(--font-permanent-marker)'],
        dosis: ['var(--font-dosis)'],
        raleway: ['var(--font-raleway)'],
        poppins: ['var(--font-poppins)'],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
