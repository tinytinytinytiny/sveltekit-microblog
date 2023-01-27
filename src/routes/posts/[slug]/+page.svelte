<script>
	import Post from '$lib/components/Post.svelte';
	import InputForm from '$lib/components/InputForm.svelte';
	export let data;
</script>

<nav>
	<a href="/posts">Back to blog</a>
</nav>
<section aria-label="Post">
	<Post content={data.post.text} />
	<footer>
		<form action={`/posts/${data.post.slug}/edit`}>
			<button type="submit">Edit</button>
		</form>
		<form method="POST" action="/posts?/delete">
			<input type="hidden" name="id" value={data.post.id} />
			<button type="submit">Delete</button>
		</form>
	</footer>
</section>
<section aria-label="Comments">
	<h2 id="comments">Comments</h2>
	<InputForm action="?/comment" placeholder="Write a comment">
		<input type="hidden" name="parent-id" value={data.post.id} />
	</InputForm>
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<ul class="posts" role="list">
		{#each data.comments as comment}
			<li><Post content={comment.text} /></li>
		{/each}
	</ul>
</section>

<style>
	footer {
		display: flex;
		gap: 16px;
	}
</style>
