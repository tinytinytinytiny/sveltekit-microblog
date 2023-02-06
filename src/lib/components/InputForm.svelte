<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import TextBox from '$lib/components/TextBox.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Button from '$lib/components/Button.svelte';

	export let action = null;
	export let placeholder;
	export let onSubmit = () => null;

	let value = '';
</script>

<form
	method="POST"
	{action}
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
	<TextBox label="Message" id="compose-post">
		<TextArea id="compose-post" name="post" required {placeholder} bind:value />
		<div class="self-start p-xs-fixed">
			<Button type="submit" disabled={Boolean(!value.replace(/\s/g, ''))}>Post</Button>
		</div>
	</TextBox>
</form>
