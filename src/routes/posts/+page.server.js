import { fail } from '@sveltejs/kit';
import { connect } from '@planetscale/database';
import { generateSlug } from 'random-word-slugs';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};
const conn = connect(config);

export const load = async () => {
	const posts = await conn.transaction(async (tx) => {
		await tx.execute('CREATE TEMPORARY TABLE parent_posts AS SELECT id, text, slug, createdAt FROM Post WHERE parentId IS NULL');
		await tx.execute('CREATE TEMPORARY TABLE child_posts AS SELECT SUM(1) AS numComments, parentId AS id FROM Post WHERE parentId IS NOT NULL GROUP BY parentId');
		return tx.execute('SELECT id, text, slug, createdAt, numComments FROM parent_posts LEFT JOIN child_posts USING (id) ORDER BY createdAt DESC');
	});

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

		await conn.execute('INSERT INTO Post (text, slug) VALUES (?, ?)', [post, generateSlug()]);
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