<script>
	import navigation from '$lib/data/navigation.json';
	import Logo from '$lib/assets/logo.svelte';
</script>

<footer class="wrapper plb-l-2xl-static text-step-0">
	<div class="layout-grid">
		<section class="stack col-span-full @lg/layout-grid:col-span-4">
			<div class="inline-block relative">
				<div class="max-w-2xl-3xl-static"><Logo /></div>
				<h2 class="h3">
					<a class="card-link no-underline text-strong" href="/">My Wonderful Microblog</a>
				</h2>
			</div>
			<p class="mbs-h3-be">{`Copyright ${new Date().getFullYear()}. All rights reversed.`}</p>
			<div class="cluster gutter-s">
				<a class="nav-link" href="/posts">Terms</a>
				<a class="nav-link" href="/posts">Privacy Policy</a>
			</div>
		</section>
		{#each navigation as section}
			<section class="stack copy">
				<h3 class="h4">{section.title}</h3>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<ul class="stack stack-space-xs" role="list">
					{#each section.links as link}
						<li>
							<a class="nav-link" href="/posts">{link}</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</footer>

<style>
	footer > .layout-grid {
		grid-row-gap: var(--copy-margin-start-h4);
	}

	.nav-link {
		--link-underline-thickness: auto;
		--link-underline-thickness-focus: 2px;
		color: var(--color-text-normal);
		font-weight: normal;
	}
</style>
