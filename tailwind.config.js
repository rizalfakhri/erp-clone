module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-gray': {
          50: '#eaeaeb',
          100: '#d4d5d7',
          200: '#bfc0c2',
          300: '#a9abae',
          400: '#94969a',
          500: '#7e8086',
          600: '#696b72',
          700: '#53565d',
          800: '#3e4149',
          900: '#282c35',
          DEFAULT: '#282c35',
        },
      },
      fontFamily: {
        'inter': ['Inter'],
        'fira-code': ['Fira Code'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(55, 65, 81, var(--tw-border-opacity))',
        'thin': 'inset 0 -1px rgba(55, 65, 81, var(--tw-border-opacity))'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
