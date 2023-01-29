<script>
	import InputForm from '$lib/components/InputForm.svelte';
	import PostList from '$lib/components/Post/PostList.svelte';
	import Post from '$lib/components/Post/Post.svelte';
	import PostBody from '$lib/components/Post/PostBody.svelte';

	export let data;
</script>

<h1>My wonderful microblog</h1>
<InputForm action="?/post" placeholder="Twitter.com" />
<h2 class="mt-xl">Recent Posts</h2>
<PostList>
	{#each data.posts as post}
		<li>
			<Post id={post.id}>
				<PostBody slot="body" content={post.text} />
				<footer slot="footer">
					<a href={`/posts/${post.id}#comments`}>{Number(post.numComments)} Comments</a>
				</footer>
			</Post>
		</li>
	{/each}
</PostList>
