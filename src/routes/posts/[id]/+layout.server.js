import { getPostWithComments } from '$lib/server';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const post = await getPostWithComments(params.id);

	if (!post) throw error(404, {
		message: 'Not found'
	});

	return post;
};