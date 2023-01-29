<script>
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import Main from '$lib/components/Main.svelte';
	import InputForm from '$lib/components/InputForm.svelte';
	import PostList from '$lib/components/Post/PostList.svelte';
	import Post from '$lib/components/Post/Post.svelte';

	export let data;
</script>

<SiteHeader>My wonderful microblog</SiteHeader>
<Main>
	<InputForm action="?/post" placeholder="Twitter.com" />
	<h2 id="posts">Recent Posts</h2>
	<div class="mbs-m">
		<PostList>
			{#each data.posts as post}
				<li>
					<Post id={post.id} content={post.text}>
						<footer>
							<a href={`/posts/${post.id}#comments`}>
								{`${Number(post.numComments)} Comments`}
							</a>
						</footer>
					</Post>
				</li>
			{/each}
		</PostList>
	</div>
</Main>

<style>
	h2 {
		border-block-end: 1px solid var(--color-separator);
		padding-block-end: var(--margin-bottom-h2);
	}
</style>
