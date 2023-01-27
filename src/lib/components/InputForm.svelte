<script>
	import { onMount } from 'svelte';
	import TextBox from '$lib/components/TextBox.svelte';
	import TextArea from '$lib/components/TextArea.svelte';

	export let action = null;
	export let placeholder;

	let button;
	let value = '';

	onMount(handleInput);

	function handleInput() {
		button.disabled = Boolean(!value.replace(/\s/g, ''));
	}
</script>

<form method="POST" {action}>
	<slot />
	<TextBox>
		<TextArea
			id="compose-post"
			name="post"
			label="Message"
			{placeholder}
			bind:value
			on:input={handleInput}
		/>
		<button type="submit" bind:this={button}>Post</button>
	</TextBox>
</form>
