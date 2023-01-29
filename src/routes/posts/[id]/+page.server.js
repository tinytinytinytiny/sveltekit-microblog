import { fail } from '@sveltejs/kit';
import { updatePost, addComment } from '$lib/utils';

export const actions = {
	edit: async ({ request }) => {
		const data = await request.formData();
		const post = data.get('post');
		const id = data.get('id');

		if (!post || !post.replace(/\s/g, '')) {
			return fail(400, { post, missing: true });
		}

		if (!id) {
			return fail(400, { id, missing: true });
		}

		await updatePost(id, post);
		return { success: true };
	},
	comment: async ({ request }) => {
		const data = await request.formData();
		const post = data.get('post');
		const parentId = data.get('parent-id');

		if (!post || !post.replace(/\s/g, '')) {
			return fail(400, { post, missing: true });
		}

		if (!parentId) {
			return fail(400, { parentId, missing: true });
		}

		await addComment(parentId, post);
		return { success: true };
	}
};