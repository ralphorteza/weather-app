/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./dist/*.html'],
  content: [
    './dist/*.{html,js}',
    './src/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
