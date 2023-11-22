const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		colors: {
			...colors,
			'primary': '#3C4765',
			'secondary': '#354D67',
      'tertiary': 'rgba(60, 71, 101, 1)',
      'pewter': 'rgba(48, 54, 66, 1)',
      'pale-yellow': 'rgba(245, 236, 229, 1)',
      'pale-violet': 'rgba(229, 234, 245, 1)',
      'pale-blue': 'rgba(235, 247, 252, 1)',
      'pale-white': 'rgba(242, 242, 242, 1)',
      'b5': 'rgba(0,0,0,0.05)',
      'b10': '#E6E6E6',
      'b15': 'rgba(0,0,0,0.15)',
      'b40': '#999999',
      'b70': '#4D4D4D',
		},
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'card': '0px 0px 8px rgba(0, 0, 0, 0.25)'
      },
      fontSize: {
        'h1': ['72px', {lineHeight: 1.21, fontWeight: 500,}],
        'h2': ['52px', {lineHeight: 1.25, fontWeight: 400}],
        'h3': ['36px', {lineHeight: 1.3, fontWeight: 500}],
        'h4': ['22px', {lineHeight: 1.3, fontWeight: 500}],
        'h5': ['20px', {lineHeight: 1.3, fontWeight: 500}],
        'h6': ['15px', {lineHeight: 1.3, fontWeight: 500}],
        'nav': ['12px', { lineHeight: 1.21, letterSpacing: '1.8px', }], 
        'info': ['15px', { lineHeight: 1.83, }], 
        'ingress': ['28px', { lineHeight: 1.4, fontWeight: 400 }],
      },
    },
  }, 
  plugins: [],
}
