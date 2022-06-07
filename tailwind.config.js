module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
      daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#176F6B",
          
 "secondary": "#FFFC00",
          
 "accent": "#37CDBE",
          
 "neutral": "#3D4451",
          
 "base-100": "#FFFFFF",
          
 "info": "#3ABFF8",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
          },
        },
      ],
    },
 plugins: [require("daisyui")],
}
