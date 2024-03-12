/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 15s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        background: "#023047",
        uploaderbg:"#219ebc"

      },
      transitionDuration: {
        "1s": "1s",
      },
      utilities: {
        '.reset': {
          margin: '0 !important',
          padding: '0 !important',
          'box-sizing': 'border-box !important',
        }
      },
    },
  },
  plugins: [],
};
