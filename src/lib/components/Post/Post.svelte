<script>
	export let id;
</script>

<div id={`post-${id}`} class="stack">
	<div class="post">
		<a class="card-link" href={`/posts/${id}/`}>
			<span class="visually-hidden">{`Post #${id}`}</span>
		</a>
		<slot name="body" />
	</div>
	<slot name="footer" />
</div>

<style>
	.post {
		position: relative;
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
