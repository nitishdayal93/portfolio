module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d4ff',
          purple: '#8a2be2',
          cyan: '#00ffd5'
        }
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00d4ff 0%, #8a2be2 50%, #00ffd5 100%)'
      }
    }
  },
  plugins: []
}
