/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          scissorsStart: "hsl(39, 89%, 49%)",
          scissorsEnd: "hsl(40, 84%, 53%)",
          paperStart: "hsl(230, 89%, 62%)",
          paperEnd: "hsl(230, 89%, 65%)",
          rockStart: "hsl(349, 71%, 52%)",
          rockEnd: "hsl(349, 70%, 56%)",
          lizardStart: "hsl(261, 73%, 60%)",
          lizardEnd: "hsl(261, 72%, 63%)",
          cyanStart: "hsl(189, 59%, 53%)",
          cyanEnd: "hsl(189, 58%, 57%)",
        },
        neutral: {
          darkText: "hsl(229, 25%, 31%)",
          scoreText: "hsl(229, 64%, 46%)",
          headerOutline: "hsl(217, 16%, 45%)",
        },
        background: {
          radialStart: "hsl(214, 47%, 23%)",
          radialEnd: "hsl(237, 49%, 15%)",
        },
      },
    },
  },
  plugins: [],
};
