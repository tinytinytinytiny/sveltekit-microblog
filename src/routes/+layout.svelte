<script>
	import '$lib/styles/global.css';
	import Footer from './Footer.svelte';
</script>

<a
	class="skip-link button text-step-2 shadow-xl absolute top-s-fixed left-s-fixed"
	href="#main-content"
>
	Skip to content
</a>
<div class="wrapper bg-surface pbs-m-xl-fixed pbe-xl-2xl-fixed md:m-s-l-fixed">
	<slot />
</div>
<Footer />

<!-- <div class="grid-preview wrapper">
	<div />
</div> -->
<style>
	.wrapper {
		--wrapper-content-width: calc(6 * var(--layout-span) - var(--layout-gutter));
	}

	/* 	.grid-preview {
		height: 100%;
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;
		z-index: -10;
	}

	.grid-preview > * {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 1fr;
		gap: var(--layout-gutter);
		height: 100%;
	} */
</style>
