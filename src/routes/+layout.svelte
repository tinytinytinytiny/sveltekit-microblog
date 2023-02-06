<script>
	import '$lib/styles/global.css';
	import SkipLink from './SkipLink.svelte';
	import Footer from './Footer.svelte';
</script>

<SkipLink></SkipLink>
<div class="wrapper md:mbs-s-l-fixed md:mli-s-l-fixed">
	<slot />
</div>
<Footer />

<style>
	.wrapper {
		--wrapper-content-width: calc(6 * var(--layout-span) - var(--layout-gutter));
		background-color: var(--background-surface);
		padding-block: theme('spacing.l-xl-fixed') theme('spacing.xl-2xl-fixed');
	}
</style>
