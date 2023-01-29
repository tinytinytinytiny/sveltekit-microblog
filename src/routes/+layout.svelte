<script>
	import '$lib/styles/global.css';
</script>

<a class="button skip-link text-step-2" href="#main-content">Skip to content</a>
<header>
	<h1>My wonderful microblog</h1>
</header>
<main tabindex="-1" id="main-content" class="pbs-m-xl pbe-2xl-3xl">
	<slot />
</main>
<footer class="copy-layout text-step-0 plb-m-xl">
	<p>Copyright 2023. All rights reversed.</p>
</footer>

<style>
	header {
		padding-block-start: theme('spacing.2xl-3xl');
		position: sticky;
		inset-block-start: 0;
		z-index: -10;
	}

	header h1 {
		color: var(--color-text-secondary);
		font-size: max(3.14rem, 1rem + 12vw);
		letter-spacing: -0.05em;
		line-height: 0.75;
		text-transform: uppercase;
	}

	.skip-link {
		@apply shadow-xl;
		top: theme('spacing.s-fixed');
		left: theme('spacing.s-fixed');
		position: absolute;
	}

	main {
		background-color: var(--background-surface);
	}

	main:focus {
		border: 0;
		outline: none;
	}
</style>
