import { connect } from '@planetscale/database';
import { generateSlug } from 'random-word-slugs';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};
const conn = connect(config);

export async function getAllPosts() {
	const posts = await conn.transaction(async (tx) => {
		await tx.execute('CREATE TEMPORARY TABLE parent_posts AS SELECT id, text, slug, createdAt FROM Post WHERE parentId IS NULL');
		await tx.execute('CREATE TEMPORARY TABLE child_posts AS SELECT SUM(1) AS numComments, parentId AS id FROM Post WHERE parentId IS NOT NULL GROUP BY parentId');
		return tx.execute('SELECT id, text, slug, createdAt, numComments FROM parent_posts LEFT JOIN child_posts USING (id) ORDER BY createdAt DESC');
	});

	return {
		posts: posts.rows
	};
}

export async function getPost(id) {
	const { rows } = await conn.execute('SELECT id, text, slug, createdAt FROM Post WHERE id = ? LIMIT 1', [id]);
	const post = await getComments(rows[0]);

	return post;
}

export async function getComments(post) {
	if (!post?.id) return post;

	const comments = await conn.execute('SELECT id, text, slug, createdAt FROM Post WHERE parentId = ? ORDER BY createdAt DESC', [post.id]);

	if (comments.rows.length) {
		const childComments = await Promise.all(comments.rows.map(getComments));
		return { ...post, comments: childComments };
	}

	return { ...post, comments: comments.rows };
}

export async function addPost(content) {
	return conn.execute('INSERT INTO Post (text, slug) VALUES (?, ?)', [content, generateSlug()]);
}

export async function addComment(parentId, content) {
	return conn.execute('INSERT INTO Post (text, slug, parentId) VALUES (?, ?, ?)', [content, generateSlug(), parentId]);
}

export async function updatePost(id, content) {
	return conn.execute('UPDATE Post SET text = ? WHERE id = ?', [content, id]);
}

export async function deletePost(id) {
	return conn.execute('DELETE FROM Post WHERE id = ?', [id]);
}