import { connect } from '@planetscale/database';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};

export const load = async ({ params }) => {
	const conn = connect(config);
	const post = await conn.execute('SELECT * FROM Post WHERE slug=? LIMIT 1', [params.slug]);

	return post.rows[0];
};