<!-- svelte-ignore a11y-no-redundant-roles -->
<ul class="post-list thread stack stack-space-m" role="list">
	<slot />
</ul>

<style>
	:global(.post-list > :where(li + li)),
	:global(.post-list :where(li > .post-list)) {
		border-block-start: 1px solid var(--color-separator);
		padding-block-start: var(--stack-space);
	}
</style>
