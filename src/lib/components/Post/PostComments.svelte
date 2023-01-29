<script>
	import PostList from '$lib/components/Post/PostList.svelte';
	import Post from '$lib/components/Post/Post.svelte';
	import PostControls from '$lib/components/Post/PostControls.svelte';

	export let comments;
</script>

<PostList>
	{#each comments as comment}
		<li>
			<Post id={comment.id} content={comment.text}>
				<PostControls id={comment.id} />
			</Post>
			{#if comment.comments.length}
				<svelte:self comments={comment.comments} />
			{/if}
		</li>
	{/each}
</PostList>
