import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

const imageTransformations = new URLSearchParams('format=avif;webp;png&picture');

const config = {
	plugins: [
		sveltekit(),
		imagetools({
			include: '**/*.{heic,heif,avif,jpeg,jpg,png,tiff,webp,gif}*',
			defaultDirectives: (id) => {
				if (id.search === '') return imageTransformations;
				return id.searchParams;
			}
		})
	]
};

export default config;
