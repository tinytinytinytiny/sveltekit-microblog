<script>
	import PostList from '$lib/components/Post/PostList.svelte';
	import Post from '$lib/components/Post/Post.svelte';
	import PostBody from '$lib/components/Post/PostBody.svelte';
	import PostControls from '$lib/components/Post/PostControls.svelte';
	import InputForm from '$lib/components/InputForm.svelte';
	export let data;
</script>

<nav>
	<a href="/posts">Back to blog</a>
</nav>
<h1>Post #{data.id}</h1>
<section class="stack" aria-label="Post">
	<PostBody content={data.text} />
	<PostControls id={data.id} />
</section>
<section class="stack mt-2xl" aria-label="Comments">
	<h2 id="comments">Comments</h2>
	<InputForm action={`/posts/${data.id}?/comment`} placeholder="Write a comment">
		<input type="hidden" name="parent-id" value={data.id} />
	</InputForm>
	<PostList>
		{#each data.comments as comment}
			<li>
				<Post id={comment.id}>
					<PostBody slot="body" content={comment.text} />
					<PostControls slot="footer" id={comment.id} />
				</Post>
				{#if comment.comments.length}
					<PostList>
						{#each comment.comments as comment}
							<li>
								<Post id={comment.id}>
									<PostBody slot="body" content={comment.text} />
									<PostControls slot="footer" id={comment.id} />
								</Post>
							</li>
						{/each}
					</PostList>
				{/if}
			</li>
		{/each}
	</PostList>
</section>
