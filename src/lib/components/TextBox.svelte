<script>
	import TextArea from '$lib/components/TextArea.svelte';

	export let id;
	export let name;
	export let label;
	export let placeholder = 'Type something…';
	export let value = '';
</script>

<div class="textbox">
	<TextArea {id} {name} {label} {placeholder} bind:value on:input />
	<slot name="controls" />
</div>

<style>
	.textbox {
		align-items: flex-start;
		background-color: #f2f2f2;
		border-radius: 4px;
		display: flex;
		gap: 8px;
		padding: 8px;
	}

	.textbox:global(:has(textarea:focus)) {
		outline: 2px solid;
	}

	.textbox:global(:has(textarea:focus)) {
		outline: 2px solid;
	}
</style>
