<script>
	import InputForm from '$lib/components/InputForm.svelte';
	import Post from '$lib/components/Post.svelte';

	export let data;
</script>

<h1>My wonderful microblog</h1>
<InputForm action="?/post" placeholder="Twitter.com" />
<h2>Recent Posts</h2>

<!-- svelte-ignore a11y-no-redundant-roles -->
<ul class="posts" role="list">
	{#each data.posts as post}
		<li>
			<Post content={post.text} />
			<footer>
				<a href={`/posts/${post.slug}/`}>{Number(post.numComments)} Comments</a>
			</footer>
		</li>
	{/each}
</ul>

<style>
	h1 {
		margin-top: 4rem;
		margin-bottom: 2rem;
	}

	footer {
		margin-top: 1em;
	}

	:global(.posts li p:last-child) {
		margin-bottom: 0;
	}
</style>
