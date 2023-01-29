<script>
	export let className = null;
	export let id = null;
	export let color = 'primary';
	export let variant = 'primary';
	export let disabled = null;
	export let form = null;
	export let type = 'button';
</script>

<button
	class={className}
	data-color={color}
	data-variant={variant}
	{id}
	{disabled}
	{form}
	{type}
	on:click
>
	<slot />
</button>

<style>
	button {
		--button-background: theme('colors.amber.300');
		--button-color: var(--color-text-bold);
		--button-shading: theme('colors.amber.600');
		@apply shadow-md;
		background-color: var(--button-background);
		border: 2px solid var(--button-shading);
		border-radius: 8px;
		box-shadow: 0 0.3em 0 var(--button-shading), var(--tw-shadow);
		color: var(--button-color);
		cursor: pointer;
		font-weight: bold;
		margin: 0;
		outline: none;
		padding: 0.25em 0.75em;
	}

	button:where([data-color='secondary']) {
		--button-background: theme('colors.slate.300 / 80%');
		--button-shading: theme('colors.slate.400');
	}

	button:hover {
		@apply shadow-sm;
		box-shadow: 0 0.15em 0 var(--button-shading), var(--tw-shadow);
		transform: translateY(0.15em);
	}

	button:focus {
		--button-background: theme('colors.amber.100');
		outline: 2px dashed var(--color-focus-ring);
		outline-offset: -6px;
	}

	button:active {
		@apply shadow-sm;
		transform: translateY(0.3em);
	}

	button:disabled {
		opacity: 0.5;
		mix-blend-mode: luminosity;
		pointer-events: none;
	}
</style>
