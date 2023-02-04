<script>
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import Main from '$lib/components/Main.svelte';
	import InputForm from '$lib/components/InputForm.svelte';
	import PostList from '$lib/components/Post/PostList.svelte';
	import Post from '$lib/components/Post/Post.svelte';

	export let data;
</script>

<SiteHeader>Microblog</SiteHeader>
<Main>
	<InputForm action="?/post" placeholder="Twitter.com" />
	<section class="mbs-l-xl" aria-label="Posts">
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
	</section>
</Main>
