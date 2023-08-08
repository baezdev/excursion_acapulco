/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        primary: '#00B9AE',
        secondary: '#F4EDE1',
        font: '#333333'
      }
    },
	},
	plugins: [],
}
