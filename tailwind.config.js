/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./index.html",
		"./css/**/*.{css}",
		"./styles/**/*.{css}"
	],
	theme: {
		extend: {
			colors: {
				brand: {
					start: '#ffac00',
					end: '#fd5e79',
					dark: '#0f172a',
					muted: '#f3f4f6',
				}
			},
			fontFamily: {
				inter: ["Inter", "Montserrat", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
			},
			boxShadow: {
				soft: '0 10px 25px -10px rgba(0,0,0,0.2)'
			}
		},
	},
	plugins: [],
};

