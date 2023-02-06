<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { generateSlug } from 'random-word-slugs';
	import TextBox from '$lib/components/TextBox.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Button from '$lib/components/Button.svelte';

	export let action = null;
	export let placeholder;
	export let onSubmit = () => null;
	export let variant = null;

	let value = '';
	const id = generateSlug();
</script>

<form
	class="stack"
	method="POST"
	{action}
	on:reset
	use:enhance={() => {
		return async ({ form, result }) => {
			form.reset();
			value = '';
			onSubmit();
			invalidateAll();
			await applyAction(result);
		};
	}}
>
	<slot />
	<TextBox label="Message" {id}>
		<TextArea {id} name="post" required {placeholder} bind:value />
		{#if !variant}
			<div class="self-start p-xs-fixed">
				<Button type="submit" disabled={Boolean(!value.replace(/\s/g, ''))}>Post</Button>
			</div>
		{/if}
	</TextBox>
	{#if variant === 'reply'}
		<div class="cluster text-step-0 justify-end">
			<Button color="secondary" type="reset">Cancel</Button>
			<Button className="grow sm:grow-0" type="submit" disabled={Boolean(!value.replace(/\s/g, ''))}
				>Post Reply</Button
			>
		</div>
	{/if}
</form>
