<script>
	import { onMount } from 'svelte';
	import TextBox from '$lib/components/TextBox.svelte';
	import TextArea from '$lib/components/TextArea.svelte';

	onMount(() => {
		document.querySelector('textarea').focus();
		document.querySelector('textarea').setSelectionRange(0, 0);
	});

	export let data;
</script>

<form id="edit" method="POST" action={`/posts/${data.slug}?/edit`}>
	<TextBox>
		<TextArea id="post" name="post" label="Edit Message" value={data.text} />
	</TextBox>
	<input type="hidden" name="id" value={data.id} />
</form>
<footer>
	<button type="submit" form="edit">Save</button>
	<form action={`/posts/${data.slug}`}>
		<button type="submit">Cancel</button>
	</form>
</footer>
