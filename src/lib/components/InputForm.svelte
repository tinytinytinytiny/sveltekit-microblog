<script>
	import { onMount } from 'svelte';
	import TextBox from '$lib/components/TextBox.svelte';

	export let action = null;

	let button;
	let value = '';

	onMount(handleInput);

	function handleInput() {
		button.disabled = Boolean(!value.replace(/\s/g, ''));
	}
</script>

<form method="POST" {action}>
	<TextBox
		id="post"
		name="post"
		label="Message"
		placeholder="Twitter.com"
		bind:value
		on:input={handleInput}
	>
		<button slot="controls" type="submit" bind:this={button}>Post</button>
	</TextBox>
</form>
