<script>
	import navigation from '$lib/data/navigation.json';
	import Logo from '$lib/assets/logo.svelte';
</script>

<footer class="stack stack-space-m-xl wrapper plb-m-xl text-step-0 bg-body">
	<div class="layout-grid">
		<section class="stack col-span-full @lg/layout-grid:col-span-4">
			<div class="h2 inline-block relative">
				<div class="logo max-w-2xl-3xl"><Logo /></div>
				<h2 class="text-step-2 leading-tight">
					<a class="card-link no-underline text-bold" href="/">My Wonderful Microblog</a>
				</h2>
			</div>
			<p class="mbs-h3-be">{`Copyright ${new Date().getFullYear()}. All rights reversed.`}</p>
			<div class="cluster gutter-s">
				<a class="nav-link font-normal text-primary decoration-auto" href="/posts">Terms</a>
				<a class="nav-link font-normal text-primary decoration-auto" href="/posts">Privacy Policy</a
				>
			</div>
		</section>
		{#each navigation as section}
			<section class="stack copy">
				<h3 class="text-step-1">{section.title}</h3>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<ul class="stack stack-space-xs mbs-h4-be" role="list">
					{#each section.links as link}
						<li>
							<a class="nav-link font-normal text-primary decoration-auto" href="/posts">{link}</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</footer>

<style>
	footer > .layout-grid {
		grid-row-gap: var(--margin-top-h4);
	}

	.nav-link {
		--link-underline-thickness-focus: 2px;
	}
</style>
