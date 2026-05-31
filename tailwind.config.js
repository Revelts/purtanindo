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
				canvas:  '#ffffff',
				ink:     '#212121',
				primary: '#17171c',
				green:   '#003c33',
				navy:    '#071829',
				blue:    '#1863dc',
				accent:  '#ffac00',
				accentB: '#fd5e79',
				stone:   '#eeece7',
				muted:   '#93939f',
				border:  '#d9d9dd',
				// keep brand alias for any remaining references
				brand: {
					start: '#ffac00',
					end:   '#fd5e79',
					dark:  '#17171c',
					light: '#eeece7',
					muted: '#93939f',
				},
			},
			fontFamily: {
				sans:    ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
				display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'sans-serif'],
			},
			letterSpacing: {
				tightest: '-0.04em',
				tighter:  '-0.02em',
			},
			lineHeight: {
				display: '1.0',
				snug:    '1.15',
			},
			borderRadius: {
				pill: '32px',
				card: '22px',
				sm:   '8px',
			},
			boxShadow: {
				card:  '0 0 0 1px #d9d9dd',
				lift:  '0 4px 24px rgba(0,0,0,0.08)',
				soft:  '0 10px 25px -10px rgba(0,0,0,0.15)',
				glow:  '0 0 30px -5px rgba(255,172,0,0.3)',
			},
			animation: {
				'fade-up': 'fadeUp 0.6s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out',
			},
		},
	},
	plugins: [],
};
