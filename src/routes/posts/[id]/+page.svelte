<script>
	import PostBody from '$lib/components/Post/PostBody.svelte';
	import PostControls from '$lib/components/Post/PostControls.svelte';

	export let data;
</script>

<PostBody content={data.text} />
<PostControls id={data.id} reply={false} />
