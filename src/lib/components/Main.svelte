<div class="wrapper bg-surface md:m-s-l-fixed">
	<main tabindex="-1" id="main-content" class="stack copy">
		<slot />
	</main>
	<slot name="footer" />
</div>

<style>
	.wrapper {
		--wrapper-content-width: calc(6 * var(--layout-span) - var(--layout-gutter));
		padding-block: theme('spacing.m-xl-fixed') theme('spacing.xl-2xl-fixed');
	}

	main:focus {
		border: 0;
		outline: none;
	}
</style>
