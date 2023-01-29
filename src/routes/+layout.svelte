<script>
	import '$lib/styles/global.css';
</script>

<a class="button skip-link text-step-2" href="#main-content">Skip to content</a>
<main id="main-content" class="pbs-m-xl pbe-2xl-3xl">
	<slot />
</main>
<footer class="copy-layout text-step-0 plb-m-xl">
	<p>Copyright 2023. All rights reversed.</p>
</footer>

<style>
	.skip-link {
		top: theme('spacing.s-fixed');
		left: theme('spacing.s-fixed');
		position: absolute;
	}

	main {
		background-color: var(--background-surface);
	}
</style>
