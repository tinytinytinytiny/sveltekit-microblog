<script>
	import Button from '$lib/components/Button.svelte';

	export let id;
</script>

<footer class="cluster gutter-s-fixed text-step-0">
	<form action={`/posts/${id}/edit`}>
		<Button color="secondary" type="submit">Edit</Button>
	</form>
	{#if import.meta.env.VITE_ENVIRONMENT === 'development'}
		<form method="POST" action={`/posts/${id}?/delete`}>
			<input type="hidden" name="id" value={id} />
			<Button color="secondary" type="submit">Delete</Button>
		</form>
	{/if}
</footer>
