<script>
	import PostBody from '$lib/components/Post/PostBody.svelte';

	export let id;
	export let content;
</script>

<article id={`post-${id}`} class="stack stack-space-m">
	<div class="relative">
		<header>
			<a class="card-link" href={`/posts/${id}/`}>
				<span class="visually-hidden">{`Post #${id}`}</span>
			</a>
		</header>
		<PostBody {content} />
	</div>
	<slot />
</article>

<style>
	.card-link {
		-webkit-touch-callout: none;
	}

	header:hover + :global(*) {
		background-color: var(--post-background-hover);
	}

	header:focus-within + :global(*) {
		background-color: var(--post-background-focus);
		outline: var(--focus-ring-outline);
		outline-offset: 2px;
	}

	.card-link:focus {
		outline: none;
	}
</style>
