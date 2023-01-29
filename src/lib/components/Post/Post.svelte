<script>
	export let id;
</script>

<div id={`post-${id}`} class="stack">
	<div class="post">
		<nav>
			<a class="card-link" href={`/posts/${id}/`}>
				<span class="visually-hidden">Post #{id}</span>
			</a>
		</nav>
		<slot name="body" />
	</div>
	<slot name="footer" />
</div>

<style>
	.post {
		position: relative;
	}

	.post nav {
		display: contents;
	}

	.post:has(.card-link:hover) {
		background-color: theme('colors.slate.100');
	}

	.post:has(.card-link:focus) {
		background-color: theme('colors.amber.100');
		outline: 2px dashed theme('colors.amber.600');
		outline-offset: 2px;
	}
</style>
