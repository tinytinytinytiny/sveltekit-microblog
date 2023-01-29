import { connect } from '@planetscale/database';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};
const conn = connect(config);

export const load = async ({ params }) => {
	const { rows } = await conn.execute('SELECT id, text, slug, createdAt FROM Post WHERE id = ? LIMIT 1', [params.id]);
	const post = await getComments(rows[0]);

	return post;
};

async function getComments(post) {
	if (!post?.id) return post;

	const comments = await conn.execute('SELECT id, text, slug, createdAt FROM Post WHERE parentId = ? ORDER BY createdAt DESC', [post.id]);

	if (comments.rows.length) {
		const childComments = await Promise.all(comments.rows.map(getComments));
		return { ...post, comments: childComments };
	}

	return { ...post, comments: comments.rows };
}