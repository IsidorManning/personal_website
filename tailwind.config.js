
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0D0D0D',
        noir: 'var(--color-noir)',
        material: 'var(--color-material)',
        charcoal: 'var(--color-charcoal)',
        gentle: 'var(--color-gentle)',
        muted: 'var(--color-muted)',
        mist: 'var(--color-mist)',
        accentgray: 'var(--color-accentgray)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
};