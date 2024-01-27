/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:
      {
        'tomato':'hsl(4, 100%, 67%)',
        'd-s-grey':'hsl(234, 29%, 20%)',
        'c-grey':'hsl(235, 18%, 26%)',
        'grey':'hsl(231, 7%, 60%)',
        'white':'hsl(0, 0%, 100%)',
      },
      fontFamily:
      {
        'roboto' : 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}

