<script>
	import snarkdown from 'snarkdown';
	export let data;

	console.log(data);
</script>

<article>
	{@html data.text
		.split(/(?:\r?\n){2,}/)
		.map((l) =>
			[' ', '\t', '#', '-', '*', '>'].some((char) => l.startsWith(char))
				? snarkdown(l)
				: `<p>${snarkdown(l)}</p>`
		)
		.join('\n')}
</article>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
	article {
		max-width: 480px;
		margin: auto;
		margin-top: 3rem;
	}
</style>
