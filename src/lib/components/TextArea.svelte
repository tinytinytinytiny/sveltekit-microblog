<script>
	export let id;
	export let name;
	export let label;
	export let placeholder = 'Type something…';
	export let value = '';
</script>

<label class="visually-hidden" for={id}>{label}</label>
<div class="textarea-wrapper">
	<textarea rows cols maxlength="10000" {id} {name} {placeholder} bind:value on:input />
	<pre class="textarea-expander" aria-hidden="true">{value}<br /></pre>
</div>

<style>
	.textarea-wrapper {
		flex-grow: 1;
		max-height: 16lh;
		position: relative;
	}

	.textarea-expander,
	textarea {
		background: transparent;
		border: none;
		display: block;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		outline: none;
		margin: 0;
		min-height: 1lh;
		overflow-wrap: break-word;
		padding: theme('spacing.xs-fixed');
		width: 100%;
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
