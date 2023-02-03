<script>
	import navigation from '$lib/data/navigation.json';
</script>

<footer class="stack stack-space-m-xl wrapper plb-m-xl text-step-0 bg-body">
	<section class="layout-grid">
		<section class="stack">
			<h2 class="text-step-2 leading-tight">
				<a class="no-underline text-bold" href="/">My Wonderful Microblog</a>
			</h2>
			<p>Copyright 2023. All rights reversed.</p>
			<div class="cluster gutter-s">
				<a class="font-normal text-primary decoration-auto" href="/posts">Terms</a>
				<a class="font-normal text-primary decoration-auto" href="/posts">Privacy Policy</a>
			</div>
		</section>
		{#each navigation as section}
			<section class="stack copy">
				<h3 class="text-step-1">{section.title}</h3>
				<ul class="stack stack-space-xs" role="list">
					{#each section.links as link}
						<li><a class="font-normal text-primary decoration-auto" href="/posts">{link}</a></li>
					{/each}
				</ul>
			</section>
		{/each}
	</section>
</footer>

<style>
	.layout-grid {
		grid-row-gap: var(--margin-top-h4);
	}

	.layout-grid > * {
		grid-column: auto / span 2;
	}

	.layout-grid > :first-child {
		grid-column: auto / span 4;
	}

	h2 + * {
		margin-block-start: var(--margin-bottom-h3);
	}
</style>