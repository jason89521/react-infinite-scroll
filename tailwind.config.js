// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/demo/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '75em' },
      xl: { max: '46.875em' },
      lg: { max: '31.25em' },
      md: { max: '28.125em' },
      sm: { max: '639px' },
    },
  },
  plugins: [],
};
