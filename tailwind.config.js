/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					start: '#ffac00',
					end: '#fd5e79',
					dark: '#0f172a',
					light: '#f8fafc',
					muted: '#f3f4f6',
				}
			},
			fontFamily: {
				sans: ["Inter", "Montserrat", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
			},
			boxShadow: {
				soft: '0 10px 25px -10px rgba(0,0,0,0.2)',
				glow: '0 0 30px -5px rgba(255, 172, 0, 0.3)'
			},
			animation: {
				'fade-up': 'fadeUp 0.6s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out',
			},
		},
	},
	plugins: [],
};

