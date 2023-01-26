<script>
	import snarkdown from 'snarkdown';
	export let data;
</script>

<h1>My wonderful microblog</h1>
<ul class="posts">
	{#each data.posts as post}
		<li>
			<article class="post-text">
				{@html post.text
					.split(/(?:\r?\n){2,}/)
					.map((l) =>
						[' ', '\t', '#', '-', '*', '>'].some((char) => l.startsWith(char))
							? snarkdown(l)
							: `<p>${snarkdown(l)}</p>`
					)
					.join('\n')}
			</article>
			<footer>
				<a href={`/posts/${post.slug}/`}>Read more</a>
			</footer>
		</li>
	{/each}
</ul>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.posts,
	h1 {
		width: 90%;
		margin: auto;
		max-width: 480px;
		padding: 0;
	}
	h1 {
		margin-top: 4rem;
		margin-bottom: 2rem;
	}
	.posts li {
		list-style: none;
		border-bottom: 1px solid #f2f2f2;
		margin: 0;
		padding: 0;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
	}
	footer {
		margin-top: 1em;
	}
	:global(.posts li p:last-child) {
		margin-bottom: 0;
	}
</style>
