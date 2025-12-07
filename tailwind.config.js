/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "text": "#212529",
        "muted": "#DEE2E6",
        "accent": "#F7A02E",
        "primary": "#0A4F70",
        "secondary": "#3E88A5",
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