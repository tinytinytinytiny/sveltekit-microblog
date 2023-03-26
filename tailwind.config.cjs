/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const fontSize = require('./src/design-tokens/ref/font-sizes.cjs');
const spacing = require('./src/design-tokens/ref/spacing.cjs');
const palette = require('./src/design-tokens/ref/color-palette.json');
const colors = require('./src/design-tokens/sys/colors.json');
const components = require('./src/design-tokens/comp/components.json');
const customUtilities = require('./src/design-tokens/custom-utilities.json');

function tokens(tokens, prefix = '') {
	return Object
		.keys(tokens)
		.reduce((a, v) => ({ ...a, [v]: `var(--${[prefix, v].filter(x => x.length).join('-')})` }), {});
}

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
		colors: Object.fromEntries(
			Object.entries(palette)
				.map(([color, steps]) => [
					color,
					Object.fromEntries(
						Object.entries(steps).map(([step]) => [
							step,
							`var(--palette-${color}-${step})`
						])
					)
				])
		),
		fontSize: tokens(fontSize, 'text'),
		spacing: {
			...tokens(spacing, 'space'),
			...customUtilities.spacing
		},
		margin: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing')
		}),
		padding: ({ theme }) => theme('spacing'),
		extend: {
			backgroundColor: tokens(colors.background, 'color-background'),
			textColor: tokens(colors.text, 'color-text'),
			maxWidth: {
				copy: 'var(--copy-width)',
				...tokens(spacing, 'space')
			},
			minWidth: {
				copy: 'var(--copy-width)',
				...tokens(spacing, 'space')
			},
			width: {
				copy: 'var(--copy-width)',
				...tokens(spacing, 'space')
			}
		},
		variables: {
			DEFAULT: {
				palette,
				space: spacing,
				text: fontSize,
				color: colors,
				...components
			}
		}
	},
	corePlugins: {
		preflight: false
	},
	plugins: [
		require('@mertasan/tailwindcss-variables'),
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
