<script>
	import PostBody from '$lib/components/Post/PostBody.svelte';

	export let id;
	export let content;
</script>

<article id={`post-${id}`} class="stack copy">
	<div class="post">
		<a class="card-link" href={`/posts/${id}/`}>
			<span class="visually-hidden">{`Post #${id}`}</span>
		</a>
		<PostBody {content} />
	</div>
	<slot />
</article>

<style>
	.post {
		position: relative;
	}

	.card-link {
		-webkit-touch-callout: none;
	}

	.card-link:hover + :global(*) {
		background-color: theme('colors.slate.100');
	}

	.card-link:focus + :global(*) {
		background-color: theme('colors.amber.100');
		outline: 2px dashed var(--color-focus-ring);
		outline-offset: 2px;
	}
</style>
