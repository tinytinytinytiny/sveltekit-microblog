/* @link https://utopia.fyi/space/calculator?c=326,14,1.2,1568,16,1.25,6,2,&s=0.75|0.5|0.25|0.125,1.5|2|3|4|6|7|8,xs-m|s-l|m-xl|l-2xl|xl-3xl|xs-xl&g=s,l,3xl,12 */

const css = `
--space-4xs: clamp(0.13rem, calc(0.13rem + 0.00vw), 0.13rem);
--space-3xs: clamp(0.25rem, calc(0.25rem + 0.00vw), 0.25rem);
--space-2xs: clamp(0.44rem, calc(0.42rem + 0.08vw), 0.50rem);
--space-xs: clamp(0.69rem, calc(0.67rem + 0.08vw), 0.75rem);
--space-s: clamp(0.88rem, calc(0.84rem + 0.16vw), 1.00rem);
--space-m: clamp(1.31rem, calc(1.26rem + 0.24vw), 1.50rem);
--space-l: clamp(1.75rem, calc(1.68rem + 0.32vw), 2.00rem);
--space-xl: clamp(2.63rem, calc(2.53rem + 0.48vw), 3.00rem);
--space-2xl: clamp(3.50rem, calc(3.37rem + 0.64vw), 4.00rem);
--space-3xl: clamp(5.25rem, calc(5.05rem + 0.97vw), 6.00rem);
--space-4xl: clamp(6.13rem, calc(5.90rem + 1.13vw), 7.00rem);
--space-5xl: clamp(7.00rem, calc(6.74rem + 1.29vw), 8.00rem);

/* One-up pairs */
--space-4xs-3xs: clamp(0.13rem, calc(0.09rem + 0.16vw), 0.25rem);
--space-3xs-2xs: clamp(0.25rem, calc(0.18rem + 0.32vw), 0.50rem);
--space-2xs-xs: clamp(0.44rem, calc(0.36rem + 0.40vw), 0.75rem);
--space-xs-s: clamp(0.69rem, calc(0.61rem + 0.40vw), 1.00rem);
--space-s-m: clamp(0.88rem, calc(0.71rem + 0.81vw), 1.50rem);
--space-m-l: clamp(1.31rem, calc(1.13rem + 0.89vw), 2.00rem);
--space-l-xl: clamp(1.75rem, calc(1.42rem + 1.61vw), 3.00rem);
--space-xl-2xl: clamp(2.63rem, calc(2.26rem + 1.77vw), 4.00rem);
--space-2xl-3xl: clamp(3.50rem, calc(2.84rem + 3.22vw), 6.00rem);
--space-3xl-4xl: clamp(5.25rem, calc(4.79rem + 2.25vw), 7.00rem);
--space-4xl-5xl: clamp(6.13rem, calc(5.63rem + 2.42vw), 8.00rem);

/* Custom pairs */
--space-xs-m: clamp(0.69rem, calc(0.47rem + 1.05vw), 1.50rem);
--space-s-l: clamp(0.88rem, calc(0.58rem + 1.45vw), 2.00rem);
--space-m-xl: clamp(1.31rem, calc(0.87rem + 2.17vw), 3.00rem);
--space-l-2xl: clamp(1.75rem, calc(1.16rem + 2.90vw), 4.00rem);
--space-xl-3xl: clamp(2.63rem, calc(1.74rem + 4.35vw), 6.00rem);
--space-xs-xl: clamp(0.69rem, calc(0.08rem + 2.98vw), 3.00rem);
`;

const semanticTokens = {
	'h2-bs': 'var(--margin-top-h2)',
	'h2-be': 'var(--margin-bottom-h2)',
	'h3-bs': 'var(--margin-top-h3)',
	'h3-be': 'var(--margin-bottom-h3)',
	'h4-bs': 'var(--margin-top-h4)',
	'h4-be': 'var(--margin-bottom-h4)'
};

const tokens = {
	'0': '0'
};

css.split(';')
	.map(x =>
		x
			.replace(/\/\*((?!\*\/).|\n)+\*\/+/g, '')
			.trim()
			.replace('--space-', '')
	)
	.filter(x => x)
	.forEach((x) => {
		const [key, value] = x.split(': ');
		tokens[key] = value;
		tokens[`${key}-fixed`] = remToPx(value);
	});

module.exports = { ...tokens, ...semanticTokens };

function remToPx(string) {
	const matchRem = new RegExp(/[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?(rem)/, 'g');
	const convertToPx = (x) => `${Math.round(Number(x.split('rem')[0]) * 16)}px`;
	return string.replaceAll(matchRem, convertToPx);
}