<!-- svelte-ignore a11y-no-redundant-roles -->
<ul class="post-list thread stack stack-space-m" role="list">
	<slot />
</ul>

<style>
	:global(.post-list :where(li + li)),
	:global(.post-list :where(li > .post-list)) {
		border-top: 1px solid theme('colors.slate.200');
		padding-block-start: theme('spacing.m');
	}
</style>
