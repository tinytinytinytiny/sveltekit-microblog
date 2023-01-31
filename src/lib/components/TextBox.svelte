<script>
	export let id;
	export let label;
</script>

<label class="visually-hidden" for={id}>{label}</label>
<div class="input flex items-center">
	<slot {id} />
</div>

<style>
	.input:global(:has(textarea:focus)) {
		outline: 2px dashed var(--color-focus-ring);
		outline-offset: 3px;
	}
</style>
