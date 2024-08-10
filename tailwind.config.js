/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color)',
        'accent-color': 'var(--accent-color)',
        'text-color': 'var(--text-color)',
        'ct-color': 'var(--ct-color)',
        'mute-color': 'var(--mute-color)',
        'title-color': 'var(--title-color)',
      },
    },
  },
  plugins: [],
}