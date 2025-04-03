import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
        light: {
          colors: {
            background: {
                DEFAULT: '#efefef',
                100: '#ffffff'
            }
          }
        },
        dark: {
          colors: {
            background: {
                DEFAULT: '#000000',
                100: '#111111',
                200: '#1f1f1f',
                300: '#2a2a2a'
            }
          }
        }
    }
  })],
}
