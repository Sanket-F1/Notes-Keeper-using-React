/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        p : {
          100 : '#6482AD'  ,
          200 : '#7FA1C3'
        } ,
        s : {
          100 : '#E2DAD6' ,
          200 : '#F5EDED'
        }
        ,
        kwhite : '#eee' ,
        kyellow : '#f5ba13'
      }
      
    },

    fontFamily : {
      sans : [ 'Montserrat' , 'sans-serif']
    }
  },
  plugins: [],
}

