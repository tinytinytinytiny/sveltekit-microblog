<script>
	import SiteHeader from './SiteHeader.svelte';
	import Main from '$lib/components/Main.svelte';
	import InputForm from '$lib/components/InputForm.svelte';
	import PostList from '$lib/components/Post/PostList.svelte';
	import Post from '$lib/components/Post/Post.svelte';
	import Pagination from './Pagination.svelte';

	export let data;
</script>

<SiteHeader />
<Main>
	<InputForm action="/posts?/post" placeholder="Twitter.com" />
	<section id="posts" class="mbs-l-xl" aria-label="Posts">
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
<Pagination count={data.pages} page={data.page} />
