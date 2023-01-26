<script>
	import snarkdown from 'snarkdown';
	export let data;

	let postContent;
	let button;

	function handleInput(e) {
		const content = e.currentTarget.value;
		postContent.textContent = content;
		button.disabled = Boolean(!content.replace(/\s/g, ''));
	}
</script>

<main>
	<h1>My wonderful microblog</h1>
	<form method="POST" action="?/blog">
		<div class="textbox">
			<label class="visually-hidden" for="post">Message</label>
			<div class="textbox-input__wrapper">
				<textarea
					class="textbox-input"
					id="post"
					name="post"
					rows="1"
					placeholder="Twitter.com"
					on:input={handleInput}
				/>
				<span class="textbox-expander" aria-hidden="true" bind:this={postContent} />
			</div>
			<button bind:this={button} disabled>Post</button>
		</div>
	</form>
	<h2>Recent Posts</h2>
	<ul class="posts">
		{#each data.posts as post}
			<li>
				<article class="post-text">
					{@html post.text
						.split(/(?:\r?\n){2,}/)
						.map((l) =>
							[' ', '\t', '#', '-', '*', '>'].some((char) => l.startsWith(char))
								? snarkdown(l)
								: `<p>${snarkdown(l)}</p>`
						)
						.join('\n')}
				</article>
				<footer>
					<a href={`/posts/${post.slug}/`}>Read more</a>
				</footer>
			</li>
		{/each}
	</ul>
</main>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
	:global(img) {
		height: auto;
		max-width: 100%;
	}
	main {
		width: 90%;
		margin: auto;
		max-width: 480px;
		padding: 0;
	}
	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
	.textbox,
	textarea,
	button {
		min-height: 24px;
	}
	.textbox {
		align-items: flex-start;
		background-color: #f2f2f2;
		border-radius: 4px;
		display: flex;
		gap: 8px;
		padding: 8px;
	}
	.textbox:has(textarea:focus) {
		outline: 2px solid;
	}
	.textbox-input__wrapper {
		line-height: 1;
		flex-grow: 1;
		position: relative;
	}
	.textbox-expander,
	.textbox-input {
		background: transparent;
		border: none;
		font-family: inherit;
		font-size: inherit;
		grid-area: 1 / 1 / 2 / 2;
		line-height: normal;
		outline: none;
		max-height: 240px;
		overflow-wrap: break-word;
		padding: 0;
		width: 100%;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.textbox-input {
		inset: 0;
		overflow: hidden;
		position: absolute;
		resize: none;
	}
	.textbox-expander {
		visibility: hidden;
	}
	ul {
		padding: 0;
	}
	h1 {
		margin-top: 4rem;
		margin-bottom: 2rem;
	}
	.posts li {
		list-style: none;
		border-bottom: 1px solid #f2f2f2;
		margin: 0;
		padding: 0;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
	}
	footer {
		margin-top: 1em;
	}
	:global(.posts li p:last-child) {
		margin-bottom: 0;
	}
</style>
