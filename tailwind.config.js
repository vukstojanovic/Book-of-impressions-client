module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        box: '0px 1px 8px #cecece',
      },
      backgroundColor: {
        footer: '#0988E3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        textGray: '#adadad',
        hero: '#04375b',
        header: '#054A7B',
        designRectangle: '#04375b',
        ecommerceRectangle: '#188EF5',
        applicationRectangle: '#0093A0',
        boiOrange: '#ff6700',
        boiNavyBlue: '#0988E3',
        boiLightBlue: '#1893fc',
        boiLightGray: '#f7f7f7',
        boiGray: '#919191',
        titleWhite: '#f3f3f3',
        cardBg: '#f7f7f7',
        cardBgHover: '#1893fc',
        cardLink: '#1893fc',
        getStartedBg: '#04375B',
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
