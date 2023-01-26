import { fail } from '@sveltejs/kit';
import { connect } from '@planetscale/database';
import { generateSlug } from 'random-word-slugs';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};
const conn = connect(config);

export const load = async () => {
	const posts = await conn.execute('SELECT * FROM Post ORDER BY createdAt DESC');

	return {
		posts: posts.rows
	};
};

export const actions = {
	post: async ({ request }) => {
		const data = await request.formData();
		const post = data.get('post');

		if (!post || !post.replace(/\s/g, '')) {
			return fail(400, { post, missing: true });
		}

		const results = await conn.execute('INSERT INTO Post (text, slug) VALUES (?, ?)', [post, generateSlug()]);
		console.log(results);

		return { success: true };
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (!id) return fail(400, { id, missing: true });

		await conn.execute('DELETE FROM Post WHERE id = ?', [id]);

		return { success: true };
	}
};