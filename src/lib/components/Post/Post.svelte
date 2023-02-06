<script>
	import PostBody from '$lib/components/Post/PostBody.svelte';

	export let id;
	export let content;
</script>

<article id={`post-${id}`} class="stack copy">
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
		background-color: theme('colors.slate.200');
	}

	header:focus-within + :global(*) {
		background-color: theme('colors.amber.100');
		outline: 2px dashed var(--color-focus-ring);
		outline-offset: 2px;
	}

	.card-link:focus {
		outline: none;
	}
</style>
