<div class="textbox">
	<slot />
</div>

<style>
	.textbox {
		align-items: center;
		background-color: theme('colors.slate.50');
		border: 2px solid theme('colors.slate.400');
		border-radius: 8px;
		box-shadow: inset 0 4px 0 theme('colors.slate.400 / 30%');
		display: flex;
		gap: 1em;
		padding: 12px 16px;
	}

	.textbox:global(:has(textarea:focus)) {
		outline: 2px dashed theme('colors.amber.600');
		outline-offset: 3px;
	}
</style>
