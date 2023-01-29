<div class="textbox">
	<slot />
</div>

<style>
	.textbox {
		align-items: center;
		background-color: var(--background-input);
		border: 2px solid var(--border-color-input);
		border-radius: 8px;
		box-shadow: inset 0 4px 0 var(--color-shading-input);
		display: flex;
	}

	.textbox:global(:has(textarea:focus)) {
		outline: 2px dashed var(--color-focus-ring);
		outline-offset: 3px;
	}
</style>
