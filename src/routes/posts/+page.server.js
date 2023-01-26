import { connect } from '@planetscale/database';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};

export const load = async () => {
	const conn = connect(config);
	const posts = await conn.execute('SELECT * FROM Post ORDER BY createdAt DESC');

	return {
		posts: posts.rows
	};
};