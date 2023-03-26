<!-- svelte-ignore a11y-no-redundant-roles -->
<ul class="post-list stack" role="list">
	<slot />
</ul>

<style>
	.post-list {
		--stack-space: var(--space-m-l-static);
	}

	:global(.post-list .post-list) {
		margin-inline-start: var(--space-m-l-static);
	}

	:global(.post-list :where(li > .post-list)) {
		margin-block-start: var(--stack-space, 1em);
	}

	:global(.post-list > :where(li + li)),
	:global(.post-list :where(li > .post-list)) {
		border-block-start: 1px solid var(--color-separator);
		padding-block-start: var(--stack-space);
	}
</style>
