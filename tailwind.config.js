/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "text": "#212529",
        "muted": "#CED4DA",
        "accent": "#FF9505",
        "primary": "#0A2463",
        "secondary": "#3E4A61",
        "background": "#F8F9FA"
},
      fontFamily: {
        "heading": [
                "Poppins",
                "sans-serif"
        ],
        "body": [
                "Lato",
                "sans-serif"
        ]
},
    },
  },
  plugins: [],
}