<script>
	import '$lib/css/global.css';
	import SkipLink from './SkipLink.svelte';
	import Footer from './Footer.svelte';
</script>

<SkipLink />
<div class="wrapper md:mbs-s-l-static md:mli-s-l-static">
	<slot />
</div>
<Footer />

<style>
	.wrapper {
		--wrapper-content-width: var(--copy-width);
		background-color: var(--color-background-surface-2);
		padding-block: var(--space-l-xl-static) var(--space-xl-2xl-static);
	}
</style>
