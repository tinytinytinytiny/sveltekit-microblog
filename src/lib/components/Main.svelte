<script>
	export let className = null;
</script>

<main tabindex="-1" id="main-content" class={'copy-layout stack copy' || className}>
	<slot />
</main>

<style>
	main {
		background-color: var(--background-surface);
		padding-block: theme('spacing.m-xl-fixed') theme('spacing.2xl-3xl-fixed');
	}

	main:focus {
		border: 0;
		outline: none;
	}
</style>
