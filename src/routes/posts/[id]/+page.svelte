<script>
	import PostBody from '$lib/components/Post/PostBody.svelte';
	import PostControls from '$lib/components/Post/PostControls.svelte';

	export let data;
</script>

{#if data.parentId}
	<p class="text-secondary text-step-0">
		Reply to <a class="text-inherit focus:text-primary" href={`/posts/${data.parentId}`}
			>{`post #${data.parentId}`}</a
		>
	</p>
{/if}
<PostBody content={data.text} />
<PostControls id={data.id} />
