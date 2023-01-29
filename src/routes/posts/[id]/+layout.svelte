<script>
	import PostList from '$lib/components/Post/PostList.svelte';
	import Post from '$lib/components/Post/Post.svelte';
	import PostBody from '$lib/components/Post/PostBody.svelte';
	import PostControls from '$lib/components/Post/PostControls.svelte';
	import InputForm from '$lib/components/InputForm.svelte';

	export let data;
</script>

<div class="flex flex-col-reverse">
	<article class="stack">
		<h1 class="mbs-[1em]">
			<slot name="title">Post #{data.id}</slot>
		</h1>
		<slot />
	</article>
	<nav>
		<a href="/posts">Back to blog</a>
	</nav>
</div>

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
