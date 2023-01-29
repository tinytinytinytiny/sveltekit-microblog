<script>
	import MarkdownIt from 'markdown-it';
	const md = new MarkdownIt({
		linkify: true,
		typographer: true
	});

	export let content;
</script>

<article class="post-text stack copy">
	{@html md.render(content)}
</article>

<style>
	.post-text :global(a) {
		position: relative;
		z-index: 1;
	}
</style>
