/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'profile-animate': {
          '0%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
            
          },
          '50%': {
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
            
          },
          '100%':{
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          }
        },
      },
      animation: {
        'profile-animate': 'profile-animate 8s ease-in-out infinite 1s',
      },
      boxShadow: 'inset 0 0 0 9px rgb(255 255 255/30%)',
    },
    // colors: {
    //   myCustomColor: '#ff4500', // Replace with your desired hex value
    // }
  },
  plugins: [],
}