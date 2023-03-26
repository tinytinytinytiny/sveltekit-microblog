<header class="full-bleed">
	<h1>
		<a href="/posts">Microblog</a>
	</h1>
</header>

<style>
	header {
		margin-block-end: var(--space-l-xl);
		padding-block: var(--space-l-xl-static);
		text-align: center;
	}

	h1 {
		font-size: max(3.14rem, 1rem + 16vw);
		letter-spacing: -0.0333em;
		text-transform: lowercase;
	}

	a {
		color: var(--header-color);
		text-decoration: none;
	}

	a:hover,
	a:focus {
		text-decoration: underline;
	}

	a:hover {
		text-decoration-color: var(--header-underline-color);
	}

	a:focus {
		background-color: transparent;
		box-shadow: none;
		color: var(--color-text-normal);
		text-decoration-color: currentColor;
	}
</style>
