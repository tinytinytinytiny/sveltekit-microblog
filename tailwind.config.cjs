/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const textColor = require('./src/design-tokens/text-colors.cjs');
const fontSize = require('./src/design-tokens/font-sizes.cjs');
const spacing = require('./src/design-tokens/spacing.cjs');

module.exports = {
	content: ['./src/*.html', './src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontSize,
		spacing,
		textColor,
		margin: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing')
		}),
		padding: ({ theme }) => theme('spacing'),
		extend: {
			maxWidth: {
				copy: 'var(--copy-width)'
			},
			minWidth: {
				copy: 'var(--copy-width)'
			},
			width: {
				copy: 'var(--copy-width)'
			}
		}
	},
	corePlugins: {
		preflight: false
	},
	plugins: [
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
