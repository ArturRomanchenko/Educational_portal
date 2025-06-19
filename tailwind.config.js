/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '1.5rem',
				lg: '2rem',
				xl: '2rem',
			},
			screens: {
				sm: '480px',
				md: '640px',
				lg: '768px',
				xl: '1280px',
			},
		},
		extend: {},
	},
	plugins: [],
};
