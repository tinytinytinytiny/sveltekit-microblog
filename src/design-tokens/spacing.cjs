/* @link https://utopia.fyi/space/calculator?c=320,14,1.2,1600,16,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l|m-xl&g=s,l,xl,12 */

const css = `
--space-3xs: clamp(0.25rem, calc(0.25rem + 0.00vw), 0.25rem);
--space-2xs: clamp(0.44rem, calc(0.42rem + 0.08vw), 0.50rem);
--space-xs: clamp(0.69rem, calc(0.67rem + 0.08vw), 0.75rem);
--space-s: clamp(0.88rem, calc(0.84rem + 0.16vw), 1.00rem);
--space-m: clamp(1.31rem, calc(1.27rem + 0.23vw), 1.50rem);
--space-l: clamp(1.75rem, calc(1.69rem + 0.31vw), 2.00rem);
--space-xl: clamp(2.63rem, calc(2.53rem + 0.47vw), 3.00rem);
--space-2xl: clamp(3.50rem, calc(3.38rem + 0.63vw), 4.00rem);
--space-3xl: clamp(5.25rem, calc(5.06rem + 0.94vw), 6.00rem);

/* One-up pairs */
--space-3xs-2xs: clamp(0.25rem, calc(0.19rem + 0.31vw), 0.50rem);
--space-2xs-xs: clamp(0.44rem, calc(0.36rem + 0.39vw), 0.75rem);
--space-xs-s: clamp(0.69rem, calc(0.61rem + 0.39vw), 1.00rem);
--space-s-m: clamp(0.88rem, calc(0.72rem + 0.78vw), 1.50rem);
--space-m-l: clamp(1.31rem, calc(1.14rem + 0.86vw), 2.00rem);
--space-l-xl: clamp(1.75rem, calc(1.44rem + 1.56vw), 3.00rem);
--space-xl-2xl: clamp(2.63rem, calc(2.28rem + 1.72vw), 4.00rem);
--space-2xl-3xl: clamp(3.50rem, calc(2.88rem + 3.13vw), 6.00rem);

/* Custom pairs */
--space-s-l: clamp(0.88rem, calc(0.59rem + 1.41vw), 2.00rem);
--space-m-xl: clamp(1.31rem, calc(0.89rem + 2.11vw), 3.00rem);
`;

const generateTokens = () => {
	const tokens = {
		'0': '0'
	};

	css.split(';')
		.map(i => i.replace(/\/\*((?!\*\/).|\n)+\*\/+/g, '').trim().replace('--space-', ''))
		.filter(i => i)
		.forEach((i) => tokens[i.split(': ')[0]] = i.split(': ')[1]);

	return tokens;
};

module.exports = generateTokens();