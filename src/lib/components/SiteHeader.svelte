<header>
	<h1><slot /></h1>
</header>

<style>
	header {
		inset-block-start: 0;
		grid-column: 1 / -1;
		padding-block-start: theme('spacing.2xl-3xl');
		position: sticky;
		text-align: center;
		z-index: -10;
	}

	header h1 {
		color: var(--color-text-secondary);
		font-size: max(3.14rem, 1rem + 12vw);
		letter-spacing: -0.05em;
		line-height: 0.75;
		text-transform: uppercase;
	}
</style>
