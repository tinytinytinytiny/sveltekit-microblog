<div class="wrapper bg-surface">
	<main tabindex="-1" id="main-content" class="stack copy">
		<slot />
	</main>
</div>

<style>
	.wrapper {
		--wrapper-content-width: calc(6 * var(--layout-span) - var(--layout-gutter));
		padding-block: theme('spacing.m-xl-fixed') theme('spacing.2xl-3xl-fixed');
	}

	main:focus {
		border: 0;
		outline: none;
	}
</style>
