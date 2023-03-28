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

	@media (hover: hover) {
		header:hover + :global(*) {
			background-color: var(--color-background-surface-3);
		}
	}

	header:focus-within + :global(*) {
		background-color: var(--color-focus-background);
		outline: var(--focus-outline);
		outline-offset: 2px;
	}

	.card-link:focus {
		outline: none;
	}
</style>
