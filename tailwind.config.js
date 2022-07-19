module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        box: '0px 1px 8px #CECECE',
      },
      backgroundColor: {
        btnConfirm: '#ff6500',
        btnGoBack: '#f5f5f5',
        spinnerLoader: '#ff6900',
        btnUnlockReviews: '#ff6900',
        btnUnlockReviewsHover: '#ff7a00',
      },
      colors: {
        textGray: '#ADADAD',
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
