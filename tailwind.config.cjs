/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const backgroundColor = require('./src/design-tokens/bg-colors.cjs');
const textColor = require('./src/design-tokens/text-colors.cjs');
const fontSize = require('./src/design-tokens/font-sizes.cjs');
const spacing = require('./src/design-tokens/spacing.cjs');

module.exports = {
	content: ['./src/*.html', './src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '34rem',
			md: '50rem',
			lg: '66rem',
			xl: '82rem',
			'2xl': '98rem'
		},
		containers: {
			sm: '30rem',
			md: '46rem',
			lg: '62rem',
			xl: '78rem',
			'2xl': '94rem'
		},
		backgroundColor,
		fontSize,
		spacing,
		margin: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing')
		}),
		padding: ({ theme }) => theme('spacing'),
		extend: {
			textColor,
			maxWidth: {
				copy: 'var(--copy-width)',
				...spacing
			},
			minWidth: {
				copy: 'var(--copy-width)',
				...spacing
			},
			width: {
				copy: 'var(--copy-width)',
				...spacing
			}
		}
	},
	corePlugins: {
		preflight: false
	},
	plugins: [
		require('@tailwindcss/container-queries'),
		require('tailwindcss-logical'),
		plugin(function ({ addUtilities, theme }) {
			const customUtilities = [
				{ configKey: 'spacing', prefix: '.stack-space', property: '--stack-space' },
				{ configKey: 'spacing', prefix: '.gutter', property: '--gutter' }
			];

			customUtilities.forEach(({ configKey, prefix, property }) =>
				addUtilities(
					Object.fromEntries(
						Object.entries(theme(configKey))
							.map(([key, value]) => [`${prefix}-${key}`, { [property]: value }])
					)
				)
			);
		})
	]
}
