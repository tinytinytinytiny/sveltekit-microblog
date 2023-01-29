<script>
	import TextBox from '$lib/components/TextBox.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data;
</script>

<form id="edit" method="POST" action={`/posts/${data.id}?/edit`}>
	<TextBox>
		<TextArea id="post" name="post" label="Edit Message" value={data.text} />
	</TextBox>
	<input type="hidden" name="id" value={data.id} />
</form>
<footer class="cluster gutter-s-fixed text-step-0">
	<Button type="submit" form="edit">Save</Button>
	<form action={`/posts/${data.id}`}>
		<Button color="secondary" type="submit">Cancel</Button>
	</form>
</footer>
