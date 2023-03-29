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

<form id="edit" method="POST" action={`/posts/${data.id}?/edit`}>
	<TextBox label="Edit Message" id="edit-post">
		<TextArea id="edit-post" name="post" value={data.text} />
	</TextBox>
	<input type="hidden" name="id" value={data.id} />
</form>
<footer class="cluster justify-end">
	<form action={`/posts/${data.id}`}>
		<Button color="secondary" type="submit">Cancel</Button>
	</form>
	<Button className="grow sm:grow-0" type="submit" form="edit">Save Changes</Button>
</footer>
