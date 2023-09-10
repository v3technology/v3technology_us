const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Roboto Slab', 'serif'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			purple: {
				lightest: '#DDD6FE',
				light: '#413F8C',
				DEFAULT: '#212047',
				dark: '#010103',
			},
		},
	},
	plugins: [],
}
