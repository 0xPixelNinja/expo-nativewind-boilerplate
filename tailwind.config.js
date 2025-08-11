/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB',
        'background': '#f8f9fa',
      },
      fontFamily: {
        'poppins': 'Poppins-Regular',
        'poppins-medium': 'Poppins-Medium',
        'poppins-bold': 'Poppins-Bold',
      },
    },
  },
  plugins: [],
}
