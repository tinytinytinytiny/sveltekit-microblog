import { connect } from '@planetscale/database';
import { generateSlug } from 'random-word-slugs';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};
const conn = connect(config);

export async function getAllPosts() {
	const { rows } = await conn.execute('SELECT parents.id, parents.text, parents.slug, parents.createdAt, COUNT(children.parentId) AS numComments FROM (SELECT id, text, slug, createdAt, parentId FROM Post WHERE parentId IS NULL) parents LEFT JOIN Post children ON parents.id = children.parentId GROUP BY id ORDER BY createdAt DESC');

	return rows;
}

export async function getPost(id) {
	const { rows } = await conn.execute('SELECT id, text, slug, createdAt, parentId FROM Post WHERE id = ? LIMIT 1', [id]);
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

export async function getParentId(childId) {
	const { rows } = await conn.execute('SELECT parentId FROM Post WHERE id = ?', [childId]);
	console.log(rows);
	return rows[0].parentId;
}