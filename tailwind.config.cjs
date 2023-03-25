/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const colors = {
	global: require('./src/design-tokens/color-palette.json'),
	semantic: require('./src/design-tokens/color-semantic.json')
};
const fontSize = require('./src/design-tokens/font-sizes.cjs');
const spacing = require('./src/design-tokens/spacing.cjs');
const components = require('./src/design-tokens/components.json');
const headingMargins = aliasedTokens(require('./src/design-tokens/heading-margins.json'));

function tokens(tokens, prefix = '') {
	return Object
		.keys(tokens)
		.reduce((a, v) => ({ ...a, [v]: `var(--${[prefix, v].filter(x => x.length).join('-')})` }), {});
}

function aliasedTokens(tokens) {
	return {
		theme: Object.fromEntries(
			Object
				.entries(tokens)
				.map(([key, { alias }]) => [alias, `var(--${key})`])
		),
		variables: Object.fromEntries(
			Object
				.entries(tokens)
				.map(([key, value]) => [key, value.value || value])
		)
	};
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
			Object.entries(colors.global)
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
		spacing: {
			...tokens(spacing, 'space'),
			...headingMargins.theme
		},
		margin: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing')
		}),
		padding: ({ theme }) => theme('spacing'),
		extend: {
			backgroundColor: tokens(colors.semantic.background, 'color-background'),
			textColor: tokens(colors.semantic.text, 'color-text'),
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
				color: {
					...colors.global,
					...colors.semantic
				},
				space: spacing,
				text: fontSize,
				...headingMargins.variables,
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
