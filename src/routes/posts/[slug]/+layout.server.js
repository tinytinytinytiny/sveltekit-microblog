import { connect } from '@planetscale/database';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};
const conn = connect(config);

export const load = async ({ params }) => {
	const { rows } = await conn.execute('SELECT id, text, slug, createdAt FROM Post WHERE slug = ? LIMIT 1', [params.slug]);
	const post = rows[0];
	const comments = await conn.execute('SELECT id, text, slug, createdAt FROM Post WHERE parentId = ? ORDER BY createdAt DESC', [post.id]);

	return { post, comments: comments.rows };
};