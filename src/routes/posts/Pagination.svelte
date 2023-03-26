<script>
	import ArrowLeft from '$lib/assets/arrow-left.svelte';
	import ArrowRight from '$lib/assets/arrow-right.svelte';

	export let count;
	export let page;

	const MAX_PAGES = 5;
	const PAGE_GROUPS = Math.ceil(Number(count) / (MAX_PAGES - 1));

	let pages;
	let visiblePages;

	$: {
		pages = [...Array(PAGE_GROUPS)]
			.map((_, group) =>
				[...Array(MAX_PAGES)]
					.map(() => group * MAX_PAGES)
					.map((x, i) => x + i + 1)
					.map((num) => (group === 0 ? num : num - group))
					.filter((num) => num <= Number(count))
			)
			.reverse();

		visiblePages = pages.find((x) => x.includes(page));
		// if current page is first in group, add the previous page so user will be able to go back
		// i.e. if page group is [5, 6, 7, 8, 9] and current page is 5, convert it to [4, 5, 6, 7, 8]
		if (page == visiblePages[0] && page > 1) {
			visiblePages.splice(0, 0, visiblePages[0] - 1);
			if (visiblePages.length > MAX_PAGES) {
				visiblePages.pop();
			}
		}
	}
</script>

{#if count}
	<nav class="cluster justify-center gutter-m-xl-static mbs-xl-2xl" aria-label="Pages">
		<a
			href={`/posts/page/${Math.max(1, page - 1)}`}
			class="button grow sm:grow-0"
			data-color="secondary"
			class:invisible={page < 2}
			aria-label="Previous Page"><ArrowLeft /> Prev</a
		>
		<!-- svelte-ignore a11y-no-redundant-roles -->
		<ol class="hidden md:cluster" role="list">
			{#if !visiblePages.includes(1)}
				<li class="hidden lg:items-end lg:cluster">
					<a
						href="/posts/page/1"
						class="button"
						aria-label="First Page, Page 1"
						data-color="secondary"
					>
						1
					</a>
					<span class="aria-hidden text-weak">…</span>
				</li>
			{/if}
			{#each visiblePages as num}
				<li class="contents">
					<a
						href={`/posts/page/${num}`}
						class="button"
						aria-current={page == num ? 'page' : null}
						aria-label={`Page ${num}`}
						data-color={page == num ? 'primary' : 'secondary'}
					>
						{num}
					</a>
				</li>
			{/each}
			{#if !visiblePages.includes(count)}
				<li class="hidden lg:items-end lg:cluster">
					<span class="aria-hidden text-weak">…</span>
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
			aria-label="Next Page">Next <ArrowRight /></a
		>
	</nav>
{/if}

<style>
	nav {
		max-inline-size: var(--layout-max-width);
	}
</style>
