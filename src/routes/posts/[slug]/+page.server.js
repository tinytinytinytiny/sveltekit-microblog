import { connect } from '@planetscale/database';

const config = {
	url: process.env.DATABASE_URL || import.meta.env.VITE_DATABASE_URL
};

export const load = async ({ params }) => {
	const conn = connect(config);
	const post = await conn.execute(`SELECT * FROM Post WHERE slug="${params.slug}" LIMIT 1`);

	return post.rows[0];
};