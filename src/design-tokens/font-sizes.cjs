/* @link https://utopia.fyi/type/calculator?c=326,14,1.2,1568,16,1.25,6,2,&s=0.75|0.5|0.25|0.125,1.5|2|3|4|6|7|8,xs-m|s-l|m-xl|l-2xl|xl-3xl|xs-xl&g=s,l,3xl,12 */

const css = `
--step--2: clamp(0.61rem, calc(0.60rem + 0.04vw), 0.64rem);
--step--1: clamp(0.73rem, calc(0.71rem + 0.09vw), 0.80rem);
--step-0: clamp(0.88rem, calc(0.84rem + 0.16vw), 1.00rem);
--step-1: clamp(1.05rem, calc(1.00rem + 0.26vw), 1.25rem);
--step-2: clamp(1.26rem, calc(1.18rem + 0.39vw), 1.56rem);
--step-3: clamp(1.51rem, calc(1.40rem + 0.57vw), 1.95rem);
--step-4: clamp(1.81rem, calc(1.65rem + 0.81vw), 2.44rem);
--step-5: clamp(2.18rem, calc(1.95rem + 1.13vw), 3.05rem);
--step-6: clamp(2.61rem, calc(2.30rem + 1.55vw), 3.82rem);
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