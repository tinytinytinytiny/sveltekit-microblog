export const load = async ({ parent }) => {
	const post = await parent();
	return post;
};