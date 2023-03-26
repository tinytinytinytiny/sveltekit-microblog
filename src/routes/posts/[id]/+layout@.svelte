<script>
	import Main from '$lib/components/Main.svelte';
	import PostComments from '$lib/components/Post/PostComments.svelte';
	import InputForm from '$lib/components/InputForm.svelte';

	export let data;
</script>

<Main>
	<div class="flex flex-col-reverse">
		<article class="stack copy">
			<header class="mbs-l-xl">
				<h1>{`Post #${data.id}`}</h1>
				{#if data.parentId}
					<p class="text-weak text-step-0 mbs-2xs">
						Reply to <a class="text-inherit focus:text-normal" href={`/posts/${data.parentId}`}
							>{`post #${data.parentId}`}</a
						>
					</p>
				{/if}
			</header>
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
	<div class="mbs-l">
		<PostComments comments={data.comments} />
	</div>
</Main>
