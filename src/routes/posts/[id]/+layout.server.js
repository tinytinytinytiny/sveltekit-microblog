import { getPost } from '$lib/server';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const post = await getPost(params.id);

	if (!post) throw error(404, {
		message: 'Not found'
	});

	return post;
};