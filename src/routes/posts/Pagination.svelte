<script>
	export let count;
	export let page;

	const MAX_PAGES = 5;
	const PAGE_GROUPS = Math.ceil(Number(count) / (MAX_PAGES - 1));
	let pages;
	let visiblePages;

	$: {
		pages = [...Array(PAGE_GROUPS)].map((_, group) =>
			[...Array(MAX_PAGES)]
				.map(() => group * MAX_PAGES)
				.map((x, i) => x + i + 1)
				.map((num) => (group === 0 ? num : num - group))
				.filter((num) => num <= Number(count))
		);

		visiblePages = [...pages].reverse().find((x) => x.includes(page));
		if (page == visiblePages[0] && page > 1) {
			visiblePages.splice(0, 0, visiblePages[0] - 1);
			if (visiblePages.length > MAX_PAGES) {
				visiblePages.pop();
			}
		}
	}
</script>

{#if count}
	<nav class="cluster justify-center pbs-l mbs-l-xl" aria-label="Pages">
		<a
			href={`/posts/page/${Math.max(1, page - 1)}`}
			class="button grow sm:grow-0"
			data-color="secondary"
			class:invisible={page < 2}
			aria-label="Previous Page">Prev</a
		>
		<!-- svelte-ignore a11y-no-redundant-roles -->
		<ol class="hidden sm:cluster" role="list">
			{#if !visiblePages.includes(1)}
				<li class="hidden md:items-end md:cluster">
					<a
						href="/posts/page/1"
						class="button"
						aria-label="First Page, Page 1"
						data-color="secondary"
					>
						1
					</a>
					<span class="aria-hidden text-secondary">…</span>
				</li>
			{/if}
			{#each visiblePages as num}
				<li class="contents">
					<a
						href={`/posts/page/${num}`}
						class="button"
						aria-current={page == num ? 'page' : null}
						aria-label={page == num ? `Current Page, Page ${num}` : `Page ${num}`}
						data-color={page == num ? 'primary' : 'secondary'}
					>
						{num}
					</a>
				</li>
			{/each}
			{#if !visiblePages.includes(count)}
				<li class="hidden md:items-end md:cluster">
					<span class="aria-hidden text-secondary">…</span>
					<a
						href={`/posts/page/${count}`}
						class="button"
						aria-label={`Last Page, Page ${count}`}
						data-color="secondary"
					>
						{count}
					</a>
				</li>
			{/if}
		</ol>
		<a
			href={`/posts/page/${Math.min(count, page + 1)}`}
			class="button grow sm:grow-0"
			data-color="secondary"
			class:invisible={page >= count}
			aria-label="Next Page">Next</a
		>
	</nav>
{/if}

<style>
	nav {
		border-block-start: 1px solid var(--color-separator);
		max-inline-size: var(--layout-max-width);
	}
</style>
