import { getAllPosts, getPostCount } from '$lib/server';
import { redirect } from '@sveltejs/kit';

const POSTS_PER_PAGE = 5;

export const load = async ({ params }) => {
	const postCount = await getPostCount();
	const totalPageCount = Math.ceil(postCount / POSTS_PER_PAGE) || 1;

	if (params.page > totalPageCount) {
		throw redirect(302, `/posts/page/${totalPageCount}`);
	}

	return {
		page: Number(params.page) || 1,
		pages: totalPageCount,
		posts: getAllPosts({ offset: POSTS_PER_PAGE * (Number(params.page) - 1) || 0 })
	};
};