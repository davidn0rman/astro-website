/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'vivid-sky-blue': '#00C8FF',
				'your-darkness': '#280041',
			},
			backgroundImage: {
				radialGradient: 'radial-gradient(circle, #00c8ff, #0094d8, #2162ab, #2e3277, #280041);',
				404: "url('/images/404.svg')",
			},
		},
	},
	plugins: [],
}
