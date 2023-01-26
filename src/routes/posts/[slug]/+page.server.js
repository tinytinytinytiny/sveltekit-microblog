import { connect } from '@planetscale/database';

const config = {
	url: import.meta.env.VITE_DATABASE_URL
};
const conn = connect(config);

export const actions = {
	edit: async ({ request }) => {
		const data = await request.formData();
		const post = data.get('post');
		const id = data.get('id');

		if (!post || !post.replace(/\s/g, '')) {
			return fail(400, { post, missing: true });
		}

		if (!id) {
			return fail(400, { id, missing: true });
		}

		const results = await conn.execute('UPDATE Post SET text = ? WHERE id = ?', [post, id]);
		console.log(results);

		return { success: true };
	}
};