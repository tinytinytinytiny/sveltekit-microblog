<script>
	import '$lib/styles/global.css';
	import Footer from './Footer.svelte';
</script>

<a class="button skip-link text-step-2" href="#main-content">Skip to content</a>
<slot />
<Footer />
<div class="grid-preview wrapper">
	<div></div>
</div>

<style>
	.skip-link {
		@apply shadow-xl;
		top: theme('spacing.s-fixed');
		left: theme('spacing.s-fixed');
		position: absolute;
	}

	.grid-preview {
		--wrapper-content-width: var(--layout-outer-width);
		height: 100%;
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;
		z-index: -10;
	}

	.grid-preview > * {
		display: grid;
		grid-template-columns: 0 repeat(12, 1fr) 0;
		grid-template-rows: 1fr;
		gap: var(--layout-gutter);
		height: 100%;
	}
</style>
