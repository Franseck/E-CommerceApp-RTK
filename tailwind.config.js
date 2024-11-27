const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tex :"#803D3B",
        primary : "#E8E0C8",
        primaryDark:"#D3A446",
        secondary:"#B66D2F",
        secondaryDark:"#297272",
        third:"#1a4146",
        forth: "#6D8B74",
      },
      fontFamily:{
        general : ["Special Elite"],
        fewer:["Schoolbell"],
        less :["Annie Use Your Telescope"],
      },
         },
  },
  plugins: [],
   });