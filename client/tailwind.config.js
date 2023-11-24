/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.600rem',
      base: '0.8rem',
      xl: '1.066rem',
      '2xl': '1.421rem',
      '3xl': '1.894rem',
      '4xl': '2.525rem',
      '5xl': '3.366rem',
    },
    fontFamily: {
      heading: 'Courier Prime',
      body: 'Courier Prime',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    colors: {
      text: 'rgba(var(--text))',
      background: 'rgba(var(--background))',
      primary: 'rgba(var(--primary))',
      secondary: 'rgba(var(--secondary))',
      accent: 'rgba(var(--accent))',
      error: 'rgba(var(--error))',
    },
  },
  plugins: [],
};
