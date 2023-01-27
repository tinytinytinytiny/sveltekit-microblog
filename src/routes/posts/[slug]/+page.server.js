import { fail } from '@sveltejs/kit';
import { connect } from '@planetscale/database';
import { generateSlug } from 'random-word-slugs';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};
const conn = connect(config);

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

		await conn.execute('UPDATE Post SET text = ? WHERE id = ?', [post, id]);
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

		await conn.execute('INSERT INTO Post (text, slug, parentId) VALUES (?, ?, ?)', [post, generateSlug(), parentId]);
		return { success: true };
	}
};