
module.exports = {
  content: ["./**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'message-in': 'messageIn 0.3s ease-out forwards',
        'message-out': 'messageOut 0.3s ease-in forwards',
      },
      keyframes: {
        messageIn: {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        messageOut: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-10px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
}
