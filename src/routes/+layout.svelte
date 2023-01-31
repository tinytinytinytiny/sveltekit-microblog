<script>
	import '$lib/styles/global.css';
</script>

<a class="button skip-link text-step-2" href="#main-content">Skip to content</a>
<slot />
<footer class="wrapper text-step-0 plb-m-xl">
	<p>Copyright 2023. All rights reversed.</p>
</footer>

<style>
	.skip-link {
		@apply shadow-xl;
		top: theme('spacing.s-fixed');
		left: theme('spacing.s-fixed');
		position: absolute;
	}
</style>
