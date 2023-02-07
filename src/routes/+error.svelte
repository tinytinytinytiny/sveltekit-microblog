<script>
	import { page } from '$app/stores';
	import Main from '$lib/components/Main.svelte';
</script>

<Main>
	<div class="flex flex-col-reverse">
		<header class="mbs-l-xl stack copy">
			<h1>{$page.status}</h1>
			<p>
				{$page.error.message}
			</p>
		</header>
		<nav>
			<a href="/posts#posts">Back to blog</a>
		</nav>
	</div>
</Main>
