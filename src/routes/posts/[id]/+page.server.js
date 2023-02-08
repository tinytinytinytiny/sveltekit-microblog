import { fail, redirect } from '@sveltejs/kit';
import { updatePost, addComment, deletePost, getParentId, getPost } from '$lib/server';

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
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (!id) return fail(400, { id, missing: true });

		const parentId = await getParentId(id);
		await deletePost(id);

		if (parentId && await getPost(parentId)) {
			throw redirect(303, `/posts/${parentId}`);
		} else {
			throw redirect(303, '/posts');
		}
	}
};