/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-darkest': '#050505', // Deep obsidian
        'brand-dark': '#141414',    // Soft charcoal
        'brand-sage': '#7ca982',    // Sage green
        'brand-mint': '#8ad8a5',    // Soft mint
        'brand-glass': 'rgba(255, 255, 255, 0.03)', // Base for glassmorphism
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}