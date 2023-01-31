<script>
	import TextBox from '$lib/components/TextBox.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Button from '$lib/components/Button.svelte';

	export let action = null;
	export let placeholder;

	let value = '';
</script>

<form method="POST" {action}>
	<slot />
	<label class="visually-hidden" for="compose-message">Message</label>
	<div class="input flex items-center">
		<TextArea id="compose-message" name="post" required {placeholder} bind:value />
		<div class="self-start p-xs-fixed">
			<Button type="submit" disabled={Boolean(!value.replace(/\s/g, ''))}>Post</Button>
		</div>
	</div>
</form>

<style>
	input:global(:has(textarea:focus)) {
		outline: 2px dashed var(--color-focus-ring);
		outline-offset: 3px;
	}
</style>