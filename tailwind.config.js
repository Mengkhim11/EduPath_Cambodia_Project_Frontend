/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#006cf9",
          hover: "#005ad4",
          light: "#eaf7ff",
          pale: "#f1faff",
          navy: "#071b38",
          dark: "#0a2138",
          footer: "#0d2b46",
          footerMuted: "#c2d1e0",
          teal: "#00a3b3",
          tealDark: "#008a99",
          mint: "#ddf8f8",
          muted: "#637b97",
          border: "#e2ebf3",
          amber: "#fef3c7",
          amberText: "#d97706"
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
      },
      boxShadow: {
        'card': '0px 3px 12px 0px rgba(15, 56, 102, 0.08)',
        'dropdown': '0px 8px 24px 0px rgba(15, 56, 102, 0.12)',
        'hero': '0px 3px 6px 0px rgba(15, 56, 102, 0.08)',
      }
    },
  },
  plugins: [],
};
