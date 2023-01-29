import { getPost } from '$lib/utils';

export const load = async ({ params }) => getPost(params.id);