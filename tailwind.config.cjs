/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const fontSize = require('./src/design-tokens/font-sizes.cjs');
const spacing = require('./src/design-tokens/spacing.cjs');
const lineHeight = require('./src/design-tokens/line-height.json');
const colors = {
	palette: require('./src/design-tokens/color-palette.json'),
	system: require('./src/design-tokens/color-system.json'),
	components: require('./src/design-tokens/color-components.json')
};
const customUtilities = require('./src/design-tokens/custom-utilities.json');

function getTokens(tokens, prefix = '') {
	const flatten = (obj) => {
		const result = {};

		Object.keys(obj).forEach((key) => {
			if (typeof obj[key] === 'object') {
				const _obj = flatten(obj[key]);
				Object.keys(_obj).forEach((_key) => {
					result[`${key}.${_key}`] = _obj[_key];
				});
			} else {
				result[key] = obj[key];
			}
		});

		return result;
	};

	const makeCSSVariable = (str) => {
		const variable = [prefix, ...str.split('.')]
			.filter(x => x.length && x !== 'DEFAULT')
			.join('-');
		return `var(--${variable})`;
	};

	const _tokens = JSON.parse(JSON.stringify(tokens));
	const flatTokens = flatten(_tokens);

	Object.keys(flatTokens).forEach((token) => {
		token.split('.').reduce((o, i) => {
			if (typeof o[i] === 'object') return o[i];
			o[i] = makeCSSVariable(token);
		}, _tokens);
	});

	return _tokens;
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
		colors: getTokens(colors.palette, 'color'),
		fontSize: getTokens(fontSize, 'text'),
		lineHeight: getTokens(lineHeight, 'leading'),
		spacing: {
			...getTokens(spacing, 'space'),
			...customUtilities.spacing
		},
		margin: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing')
		}),
		padding: ({ theme }) => theme('spacing'),
		extend: {
			backgroundColor: getTokens(colors.system.background, 'color-background'),
			colors: ({ colors }) => ({
				current: colors.current,
				inherit: colors.inherit
			}),
			textColor: getTokens(colors.system.text, 'color-text'),
			maxWidth: {
				copy: 'var(--copy-width)',
				...getTokens(spacing, 'space')
			},
			minWidth: {
				copy: 'var(--copy-width)',
				...getTokens(spacing, 'space')
			},
			width: {
				copy: 'var(--copy-width)',
				...getTokens(spacing, 'space')
			}
		},
		variables: {
			DEFAULT: {
				space: spacing,
				text: fontSize,
				color: {
					...colors.palette,
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
