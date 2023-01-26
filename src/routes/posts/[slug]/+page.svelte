<script>
	import Post from '$lib/components/Post.svelte';
	export let data;

	console.log(data);
</script>

<nav>
	<a href="/posts">Back to blog</a>
</nav>
<Post content={data.text} />
<footer>
	<form action={`/posts/${data.slug}/edit`}>
		<button type="submit">Edit</button>
	</form>
	<form method="POST" action="/posts?/delete">
		<input type="hidden" name="id" value={data.id} />
		<button type="submit">Delete</button>
	</form>
</footer>

<style>
	footer {
		display: flex;
		gap: 16px;
	}
</style>
