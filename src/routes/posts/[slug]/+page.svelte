<script>
	import Post from '$lib/components/Post.svelte';
	import InputForm from '$lib/components/InputForm.svelte';
	export let data;
</script>

<nav>
	<a href="/posts">Back to blog</a>
</nav>
<section aria-label="Post">
	<Post content={data.text} />
	<footer>
		<form action={`/posts/${data.slug}/edit`}>
			<button type="submit">Edit</button>
		</form>
		{#if import.meta.env.VITE_ENVIRONMENT === 'development'}
			<form method="POST" action="/posts?/delete">
				<input type="hidden" name="id" value={data.id} />
				<button type="submit">Delete</button>
			</form>
		{/if}
	</footer>
</section>
<section aria-label="Comments">
	<h2 id="comments">Comments</h2>
	<InputForm action={`/posts/${data.slug}?/comment`} placeholder="Write a comment">
		<input type="hidden" name="parent-id" value={data.id} />
	</InputForm>
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<ul class="posts" role="list">
		{#each data.comments as comment}
			<li>
				<Post content={comment.text} />
				{#if comment.comments.length}
					<ul class="posts" role="list">
						{#each comment.comments as comment}
							<li><Post content={comment.text} /></li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style>
	footer {
		display: flex;
		gap: 16px;
	}
</style>
