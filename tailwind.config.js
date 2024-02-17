/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': "#0d9488",
        'secondary': "#b98cc6",
        'tertiary': "#dcc1e5",
        'quaternary': "#11b880",
        'quinternary': "#b39c9a",
        'white': "#fff",
        'black': "#000"
      },
      backgroundImage: {
        'leaves' : "url('$lib/img/foglie.jpg')"
      }
    },
  },
  plugins: [],
}

