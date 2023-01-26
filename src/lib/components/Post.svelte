<script>
	import MarkdownIt from 'markdown-it';
	const md = new MarkdownIt({
		linkify: true,
		typographer: true
	});

	export let content;
</script>

<article class="post-text">
	{@html md.render(content)}
</article>
