/* @link https://utopia.fyi/space/calculator?c=320,14,1.2,1600,16,1.25,5,2,&s=0.75|0.5|0.25|0.125,1.5|2|3|4|6|7|8,xs-m|s-l|m-xl|xs-3xl&g=s,l,xl,12 */

const css = `
--space-4xs: clamp(0.13rem, calc(0.13rem + 0.00vw), 0.13rem);
--space-3xs: clamp(0.25rem, calc(0.25rem + 0.00vw), 0.25rem);
--space-2xs: clamp(0.44rem, calc(0.42rem + 0.08vw), 0.50rem);
--space-xs: clamp(0.69rem, calc(0.67rem + 0.08vw), 0.75rem);
--space-s: clamp(0.88rem, calc(0.84rem + 0.16vw), 1.00rem);
--space-m: clamp(1.31rem, calc(1.27rem + 0.23vw), 1.50rem);
--space-l: clamp(1.75rem, calc(1.69rem + 0.31vw), 2.00rem);
--space-xl: clamp(2.63rem, calc(2.53rem + 0.47vw), 3.00rem);
--space-2xl: clamp(3.50rem, calc(3.38rem + 0.63vw), 4.00rem);
--space-3xl: clamp(5.25rem, calc(5.06rem + 0.94vw), 6.00rem);
--space-4xl: clamp(6.13rem, calc(5.91rem + 1.09vw), 7.00rem);
--space-5xl: clamp(7.00rem, calc(6.75rem + 1.25vw), 8.00rem);

/* One-up pairs */
--space-4xs-3xs: clamp(0.13rem, calc(0.09rem + 0.16vw), 0.25rem);
--space-3xs-2xs: clamp(0.25rem, calc(0.19rem + 0.31vw), 0.50rem);
--space-2xs-xs: clamp(0.44rem, calc(0.36rem + 0.39vw), 0.75rem);
--space-xs-s: clamp(0.69rem, calc(0.61rem + 0.39vw), 1.00rem);
--space-s-m: clamp(0.88rem, calc(0.72rem + 0.78vw), 1.50rem);
--space-m-l: clamp(1.31rem, calc(1.14rem + 0.86vw), 2.00rem);
--space-l-xl: clamp(1.75rem, calc(1.44rem + 1.56vw), 3.00rem);
--space-xl-2xl: clamp(2.63rem, calc(2.28rem + 1.72vw), 4.00rem);
--space-2xl-3xl: clamp(3.50rem, calc(2.88rem + 3.13vw), 6.00rem);
--space-3xl-4xl: clamp(5.25rem, calc(4.81rem + 2.19vw), 7.00rem);
--space-4xl-5xl: clamp(6.13rem, calc(5.66rem + 2.34vw), 8.00rem);

/* Custom pairs */
--space-xs-m: clamp(0.69rem, calc(0.48rem + 1.02vw), 1.50rem);
--space-s-l: clamp(0.88rem, calc(0.59rem + 1.41vw), 2.00rem);
--space-m-xl: clamp(1.31rem, calc(0.89rem + 2.11vw), 3.00rem);
--space-xs-3xl: clamp(0.69rem, calc(-0.64rem + 6.64vw), 6.00rem);
`;

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

module.exports = tokens;

function remToPx(string) {
	const matchRem = new RegExp(/[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?(rem)/, 'g');
	const convertToPx = (x) => `${Math.round(Number(x.split('rem')[0]) * 16)}px`;
	return string.replaceAll(matchRem, convertToPx);
}