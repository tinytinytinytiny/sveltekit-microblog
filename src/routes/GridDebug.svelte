<div class="grid-preview wrapper">
	<div />
</div>

<style>
	.grid-preview {
		height: 100%;
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;
		z-index: -10;
	}

	.grid-preview > * {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 1fr;
		gap: var(--layout-gutter);
		height: 100%;
	}
</style>