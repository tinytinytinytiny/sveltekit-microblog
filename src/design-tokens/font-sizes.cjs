/* @link https://utopia.fyi/type/calculator?c=320,14,1.2,1600,16,1.25,5,2,&s=0.75|0.5|0.25|0.125,1.5|2|3|4|6|7|8,xs-m|s-l|m-xl&g=s,l,xl,12 */

const css = `
--step--2: clamp(0.61rem, 0.60rem + 0.04vw, 0.64rem);
--step--1: clamp(0.73rem, 0.71rem + 0.09vw, 0.80rem);
--step-0: clamp(0.88rem, 0.84rem + 0.16vw, 1.00rem);
--step-1: clamp(1.05rem, 1.00rem + 0.25vw, 1.25rem);
--step-2: clamp(1.26rem, 1.18rem + 0.38vw, 1.56rem);
--step-3: clamp(1.51rem, 1.40rem + 0.55vw, 1.95rem);
--step-4: clamp(1.81rem, 1.66rem + 0.78vw, 2.44rem);
--step-5: clamp(2.18rem, 1.96rem + 1.09vw, 3.05rem);
`;

const tokens = {};

css.split(';')
	.map(x =>
		x
			.replace(/\/\*((?!\*\/).|\n)+\*\/+/g, '')
			.trim()
			.replace('--', '')
	)
	.filter(x => x)
	.forEach((x) => {
		const [key, value] = x.split(': ');
		tokens[key] = value;
	});

module.exports = tokens;