<script>
	export let id;
	export let name;
	export let label;
	export let placeholder = 'Type something…';
	export let value = '';
</script>

<label class="visually-hidden" for={id}>{label}</label>
<div class="textarea-wrapper">
	<textarea {id} {name} rows="1" {placeholder} bind:value on:input />
	<pre class="textarea-expander" aria-hidden="true">{value}<br /></pre>
</div>

<style>
	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.textarea-wrapper {
		line-height: 1;
		flex-grow: 1;
		position: relative;
	}

	.textarea-expander,
	textarea {
		background: transparent;
		border: none;
		display: block;
		font-family: inherit;
		font-size: inherit;
		line-height: normal;
		outline: none;
		margin: 0;
		max-height: 240px;
		min-height: 24px;
		overflow-wrap: break-word;
		padding: 0;
		width: 100%;
		white-space: pre-wrap;
		word-break: break-word;
	}

	textarea {
		inset: 0;
		position: absolute;
		resize: none;
	}

	.textarea-expander {
		visibility: hidden;
	}
</style>
