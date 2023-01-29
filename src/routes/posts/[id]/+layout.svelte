<script>
	import Main from '$lib/components/Main.svelte';
	import PostComments from '$lib/components/Post/PostComments.svelte';
	import InputForm from '$lib/components/InputForm.svelte';

	export let data;
</script>

<Main>
	<div class="flex flex-col-reverse">
		<article class="stack">
			<h1 class="mbs-[1em]">{`Post #${data.id}`}</h1>
			<slot />
		</article>
		<nav>
			<a href="/posts#posts">Back to blog</a>
		</nav>
	</div>
	<h2 id="comments">Comments</h2>
	<InputForm action={`/posts/${data.id}?/comment`} placeholder="Write a comment">
		<input type="hidden" name="parent-id" value={data.id} />
	</InputForm>
	<PostComments comments={data.comments} />
</Main>
