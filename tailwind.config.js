import { container, fontFamily } from './theme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    fontFamily,
    container,
  },
  plugins: [],
}
