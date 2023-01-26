<script>
	import InputForm from '$lib/components/InputForm.svelte';
	import Post from '$lib/components/Post.svelte';

	export let data;
</script>

<h1>My wonderful microblog</h1>
<InputForm action="?/post" />
<h2>Recent Posts</h2>
<ul class="posts">
	{#each data.posts as post}
		<li>
			<Post content={post.text} />
			<footer>
				<a href={`/posts/${post.slug}/`}>Permalink</a>
			</footer>
		</li>
	{/each}
</ul>

<style>
	ul {
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
