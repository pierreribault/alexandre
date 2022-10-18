import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const deploy = process.env.NODE_ENV === 'deploy';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build'
		}),

		paths: {
			base: deploy ? '/alexandre' : ''
		},

		serviceWorker: {
			register: false
		}
	}
};

export default config;
