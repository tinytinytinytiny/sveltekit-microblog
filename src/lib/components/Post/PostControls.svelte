<script>
	export let id;
</script>

<footer class="cluster gutter-s text-step-0">
	<form action={`/posts/${id}/edit`}>
		<button type="submit">Edit</button>
	</form>
	{#if import.meta.env.VITE_ENVIRONMENT === 'development'}
		<form method="POST" action="/posts?/delete">
			<input type="hidden" name="id" value={id} />
			<button type="submit">Delete</button>
		</form>
	{/if}
</footer>
