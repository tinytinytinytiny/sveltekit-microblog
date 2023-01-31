<script>
	export let id;
	export let name;
	export let placeholder = 'Type something…';
	export let required = null;
	export let value = '';
</script>

<div class="textarea-wrapper">
	<textarea rows cols maxlength="10000" {id} {name} {placeholder} {required} bind:value on:input />
	<pre class="textarea-expander" aria-hidden="true">{value}<br /></pre>
</div>

<style>
	.textarea-wrapper {
		flex-grow: 1;
		max-block-size: 16lh;
		position: relative;
	}

	.textarea-expander,
	textarea {
		background: transparent;
		border: none;
		display: block;
		font-family: inherit;
		font-size: inherit;
		inline-size: 100%;
		line-height: inherit;
		outline: none;
		margin: 0;
		min-block-size: 1lh;
		overflow-wrap: break-word;
		padding: 0.75em;
		white-space: pre-wrap;
		word-break: break-word;
	}

	textarea {
		inset: 0;
		position: absolute;
		resize: none;
	}

	textarea::placeholder {
		color: var(--color-text-secondary);
	}

	.textarea-expander {
		visibility: hidden;
	}
</style>
