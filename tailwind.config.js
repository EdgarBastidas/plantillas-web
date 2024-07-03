/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fondo: "#000710",//color de fondo oscuro
        fondo2: "#000713",//color de fondo oscuro
        fucsia: "#9C1039", // color de fondo blanco
        
      },
    },
  },
  plugins: [],
}