<script>
	import navigation from '$lib/data/navigation.json';
	import Logo from '$lib/assets/logo.svelte';
</script>

<footer class="stack stack-space-m-xl wrapper plb-m-xl text-step-0 bg-body">
	<div class="layout-grid">
		<section class="stack">
			<div class="h2 relative inline-block">
				<Logo />
				<h2 class="text-step-2 leading-tight">
					<a class="card-link no-underline text-bold" href="/">My Wonderful Microblog</a>
				</h2>
			</div>
			<p>Copyright 2023. All rights reversed.</p>
			<div class="cluster gutter-s">
				<a class="font-normal text-primary decoration-auto" href="/posts">Terms</a>
				<a class="font-normal text-primary decoration-auto" href="/posts">Privacy Policy</a>
			</div>
		</section>
		{#each navigation as section}
			<section class="stack copy">
				<h3 class="text-step-1">{section.title}</h3>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<ul class="stack stack-space-xs" role="list">
					{#each section.links as link}
						<li>
							<a class="font-normal text-primary decoration-auto" href="/posts">{link}</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</footer>

<style>
	/* .flex-grid {
		gap: 0;
	}

	.flex-grid > * {
		flex-basis: calc(4 * var(--layout-span) - var(--layout-gutter));
	}

	.flex-grid > :first-child {
		flex-grow: 0;
		flex-shrink: 1;
		margin-block-end: var(--margin-top-h4);
		margin-inline-end: var(--layout-gutter);
	} */

	.layout-grid {
		grid-row-gap: var(--margin-top-h4);
	}

	.layout-grid > :first-child {
		grid-column: auto / span 12;
	}

	@media (min-width: 82rem) {
		.layout-grid > * {
			grid-column: auto / span 2;
		}

		.layout-grid > :first-child {
			grid-column: auto / span 4;
		}
	}

	footer :global(svg) {
		width: var(--layout-column-width);
	}

	.h2 + * {
		margin-block-start: var(--margin-bottom-h3);
	}
</style>
