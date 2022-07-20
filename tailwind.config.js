module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        box: '0px 1px 8px #cecece',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        textGray: '#adadad',
        hero: '#04375b',
        boiOrange: '#ff6700',
        titleWhite: '#f3f3f3',
      },
    },
    keyframes: {
      spin: {
        '0%': { transform: 'scale(1)', opacity: 1 },
        '100%': { transform: 'scale(0)', opacity: 0 },
      },
    },
    animation: {
      spinLoader: 'spin 1.2s linear infinite',
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
}
