<header class="full-bleed">
	<h1>
		<a class="text-secondary no-underline" href="/posts">Microblog</a>
	</h1>
</header>

<style>
	header {
		margin-block-end: theme('spacing.l-xl');
		padding-block: theme('spacing.l-xl-fixed');
		text-align: center;
	}

	header h1 {
		font-size: max(3.14rem, 1rem + 16vw);
		letter-spacing: -0.0333em;
		text-transform: lowercase;
	}

	a:hover,
	a:focus {
		text-decoration: underline;
	}

	a:hover {
		text-decoration-color: theme('colors.slate.400');
	}

	a:focus {
		background-color: transparent;
		box-shadow: none;
		color: theme('textColor.primary');
		text-decoration-color: currentColor;
	}
</style>
