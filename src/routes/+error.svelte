<script>
	import { page } from '$app/stores';
	import Main from '$lib/components/Main.svelte';
</script>

<Main>
	<h1>{$page.status}</h1>
	<p>
		{$page.error.message}
	</p>
</Main>
