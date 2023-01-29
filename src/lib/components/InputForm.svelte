<script>
	import { onMount } from 'svelte';
	import TextBox from '$lib/components/TextBox.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Button from '$lib/components/Button.svelte';

	export let action = null;
	export let placeholder;

	// let button;
	let value = '';

	// onMount(handleInput);

	// function handleInput() {
	// 	button.disabled = Boolean(!value.replace(/\s/g, ''));
	// }
</script>

<form method="POST" {action}>
	<slot />
	<TextBox>
		<TextArea id="compose-post" name="post" label="Message" {placeholder} bind:value />
		<div class="button-wrapper">
			<Button type="submit" disabled={Boolean(!value.replace(/\s/g, ''))}>Post</Button>
		</div>
	</TextBox>
</form>

<style>
	.button-wrapper {
		align-self: flex-start;
		padding: theme('spacing.xs-fixed');
	}
</style>
