<script>
	import { onMount } from 'svelte';
	import TextBox from '$lib/components/TextBox.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Button from '$lib/components/Button.svelte';

	onMount(() => {
		document.querySelector('textarea').focus();
		document.querySelector('textarea').setSelectionRange(0, 0);
	});

	export let data;
</script>

<h1>Editing Post #{data.id}</h1>
<form id="edit" method="POST" action={`/posts/${data.id}?/edit`}>
	<TextBox>
		<TextArea id="post" name="post" label="Edit Message" value={data.text} />
	</TextBox>
	<input type="hidden" name="id" value={data.id} />
</form>
<footer class="cluster gap-s">
	<Button type="submit" form="edit">Save</Button>
	<form action={`/posts/${data.id}`}>
		<Button color="secondary" type="submit">Cancel</Button>
	</form>
</footer>
