import { getPost } from '$lib/server';

export const load = async ({ params }) => getPost(params.id);