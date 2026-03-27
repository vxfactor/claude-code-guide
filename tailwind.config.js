/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f1ee',
        beige: '#e8e2de',
        white: '#feffff',
        dark: '#493b35',
        primary: '#493b35',
        secondary: '#7a6b62',
        accent: '#f24b2e',
        'accent-hover': '#d93e23',
        'accent-warm': '#a58372',
        border: '#d9d0c9',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'brutal': '6px 6px 0 0 #493b35',
        'brutal-lg': '8px 8px 0 0 #493b35',
        'brutal-accent': '6px 6px 0 0 #f24b2e',
      },
    },
  },
  plugins: [],
}
