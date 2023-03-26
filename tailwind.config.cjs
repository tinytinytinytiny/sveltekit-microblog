/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const fontSize = require('./src/design-tokens/font-sizes.cjs');
const spacing = require('./src/design-tokens/spacing.cjs');
const lineHeight = require('./src/design-tokens/line-height.json');
const colors = {
	palette: require('./src/design-tokens/color-palette.json'),
	semanticPalette: require('./src/design-tokens/color-semantic-palette.json'),
	system: require('./src/design-tokens/color-system.json'),
	components: require('./src/design-tokens/color-components.json')
};
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
			Object.entries(colors.semanticPalette)
				.map(([color, steps]) => [
					color,
					Object.fromEntries(
						Object.entries(steps).map(([step]) => [
							step,
							`var(--color-${color}-${step})`
						])
					)
				])
		),
		fontSize: tokens(fontSize, 'text'),
		lineHeight: tokens(lineHeight, 'leading'),
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
			backgroundColor: tokens(colors.system.background, 'color-background'),
			colors: ({ colors }) => ({
				current: colors.current,
				inherit: colors.inherit
			}),
			textColor: tokens(colors.system.text, 'color-text'),
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
				space: spacing,
				text: fontSize,
				palette: colors.palette,
				color: {
					...colors.semanticPalette,
					...colors.system
				},
				leading: lineHeight,
				...colors.components
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
