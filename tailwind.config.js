// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/demo/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '56.25em' },
      xl: { max: '43.75em' },
      lg: { max: '34.375em' },
      md: { max: '28.125em' },
      sm: { max: '639px' },
    },
  },
  plugins: [],
};
