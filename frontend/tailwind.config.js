export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
],

   plugins: [
     require('@tailwindcss/forms'),
     require('@tailwindcss/typography'),
     require('@tailwindcss/aspect-ratio'),
  ],

};