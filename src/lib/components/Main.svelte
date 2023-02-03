<div class="wrapper bg-surface">
	<div class="layout-grid">
		<main tabindex="-1" id="main-content" class="stack copy">
			<slot />
		</main>
	</div>
</div>

<style>
	.wrapper {
		padding-block: theme('spacing.m-xl-fixed') theme('spacing.2xl-3xl-fixed');
	}

	main {
		grid-column: 1 / -1;
	}

	@media (min-width: 50rem) {
		main {
			grid-column: 3 / span 8;
		}
	}

	@media (min-width: 82rem) {
		main {
			grid-column: 4 / span 6;
		}
	}

	main:focus {
		border: 0;
		outline: none;
	}
</style>
