<script>
	export let id;
	export let label;
</script>

<label class="visually-hidden" for={id}>{label}</label>
<div class="input flex items-center">
	<slot />
</div>

<style>
	.input:global(:has(textarea:focus)) {
		outline: var(--focus-outline);
		outline-offset: var(--focus-outline-offset);
	}
</style>
