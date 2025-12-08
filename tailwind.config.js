/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "text": "#212529",
        "muted": "#E0E0E0",
        "accent": "#FF9800",
        "primary": "#0D47A1",
        "secondary": "#1976D2",
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