import { connect } from '@planetscale/database';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};
const conn = connect(config);

export const load = async ({ params }) => {
	const post = await conn.execute('SELECT * FROM Post WHERE slug=? LIMIT 1', [params.slug]);
	return post.rows[0];
};