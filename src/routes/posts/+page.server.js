import { fail } from '@sveltejs/kit';
import { getAllPosts, addPost } from '$lib/server';

export const load = async () => ({ posts: getAllPosts() });

export const actions = {
	post: async ({ request }) => {
		const data = await request.formData();
		const post = data.get('post');

		if (!post || !post.replace(/\s/g, '')) {
			return fail(400, { post, missing: true });
		}

		await addPost(post);
		return { success: true };
	}
};