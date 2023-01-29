<script>
	export let className = null;
</script>

<main tabindex="-1" id="main-content" class={'copy-layout stack copy' || className}>
	<slot />
</main>
