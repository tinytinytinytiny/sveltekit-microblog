<script>
	import MarkdownIt from 'markdown-it';
	const md = new MarkdownIt({
		linkify: true,
		typographer: true
	});

	export let content;
</script>

<section class="post-body stack copy">
	{@html md.render(content)}
</section>

<style>
	.post-body :global(a) {
		position: relative;
		z-index: 1;
	}

	.post-body :global(p:has(img)) {
		max-inline-size: 100%;
	}
</style>
