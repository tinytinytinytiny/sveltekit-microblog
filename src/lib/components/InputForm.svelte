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
	<TextBox label="Message" let:id="compose-post">
		<TextArea {id} name="post" required {placeholder} bind:value />
		<div class="self-start p-xs-fixed">
			<Button type="submit" disabled={Boolean(!value.replace(/\s/g, ''))}>Post</Button>
		</div>
	</TextBox>
</form>
