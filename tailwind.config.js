/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "text": "#212529",
        "muted": "#6C757D",
        "accent": "#F97316",
        "primary": "#005A9C",
        "secondary": "#3B82F6",
        "background": "#F8F9FA"
},
      fontFamily: {
        "heading": [
                "Inter",
                "sans-serif"
        ],
        "body": [
                "Inter",
                "sans-serif"
        ]
},
    },
  },
  plugins: [],
}