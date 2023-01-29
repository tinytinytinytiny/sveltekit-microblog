import { fail } from '@sveltejs/kit';
import { getAllPosts, addPost, deletePost } from '$lib/utils';

export const load = async () => getAllPosts();

export const actions = {
	post: async ({ request }) => {
		const data = await request.formData();
		const post = data.get('post');

		if (!post || !post.replace(/\s/g, '')) {
			return fail(400, { post, missing: true });
		}

		await addPost(post);
		return { success: true };
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (!id) return fail(400, { id, missing: true });

		await deletePost(id);
		return { success: true };
	}
};