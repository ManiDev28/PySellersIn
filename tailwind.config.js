module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          background5: "var(--global-bg-5)",
          background6: "var(--global-bg-6)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)"
        },
        header: {
          background1: "var(--header-bg-1)",
          text1: "var(--header-text-1)"
        },
        button: {
          background1: "var(--button-bg-1)",
          text1: "var(--button-text-1)"
        },
        footer: {
          background1: "var(--footer-bg-1)"
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};