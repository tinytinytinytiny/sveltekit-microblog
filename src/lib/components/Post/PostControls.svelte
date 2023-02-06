<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import InputForm from '$lib/components/InputForm.svelte';

	export let id;
	export let reply = true;

	let replying = false;
</script>

<footer class="stack">
	<div class="cluster text-step-0">
		{#if reply}
			<form action={`/posts/${id}`} on:submit|preventDefault={() => (replying = !replying)}>
				<Button type="submit">Reply</Button>
			</form>
		{/if}
		<form action={`/posts/${id}/edit`}>
			<Button color="secondary" type="submit">Edit</Button>
		</form>
		{#if import.meta.env.VITE_ENVIRONMENT === 'development'}
			<form
				method="POST"
				action={`/posts/${id}?/delete`}
				use:enhance={() => {
					return async ({ result }) => {
						invalidateAll();
						await applyAction(result);
					};
				}}
			>
				<input type="hidden" name="id" value={id} />
				<Button color="secondary" type="submit">Delete</Button>
			</form>
		{/if}
	</div>
	{#if replying}
		<InputForm
			action={`/posts/${id}?/comment`}
			placeholder="Write a reply"
			onSubmit={() => (replying = false)}
		>
			<input type="hidden" name="parent-id" value={id} />
		</InputForm>
	{/if}
</footer>
