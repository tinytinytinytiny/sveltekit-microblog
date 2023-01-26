<script>
	import snarkdown from 'snarkdown';
	export let data;

	console.log(data);
</script>

<main>
	<nav>
		<a href="/posts">Back to blog</a>
	</nav>
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
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
	main {
		max-width: 480px;
		margin: auto;
		margin-top: 3rem;
	}
</style>
