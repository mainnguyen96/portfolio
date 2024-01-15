import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms'
      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'Arial']
    },
    screens: {
      'sm-max': {max: "640px"},
      "md-max": {max: "768px"}
    }
  },
  plugins: []
} satisfies Config;
