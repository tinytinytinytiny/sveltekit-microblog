<div class="textbox">
	<slot />
</div>

<style>
	.textbox {
		align-items: flex-start;
		background-color: #f2f2f2;
		border-radius: 4px;
		display: flex;
		gap: 8px;
		padding: 8px;
	}

	.textbox:global(:has(textarea:focus)) {
		outline: 2px solid;
	}
</style>
