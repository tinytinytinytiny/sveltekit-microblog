<script>
	import PostList from '$lib/components/Post/PostList.svelte';
	import Post from '$lib/components/Post/Post.svelte';
	import PostBody from '$lib/components/Post/PostBody.svelte';
	import PostControls from '$lib/components/Post/PostControls.svelte';

	export let comments;
</script>

<PostList>
	{#each comments as comment}
		<li>
			<Post id={comment.id}>
				<PostBody slot="body" content={comment.text} />
				<PostControls slot="footer" id={comment.id} />
			</Post>
			{#if comment.comments.length}
				<svelte:self comments={comment.comments} />
			{/if}
		</li>
	{/each}
</PostList>
