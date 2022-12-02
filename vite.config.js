import { sveltekit } from '@sveltejs/kit/vite';
import { build } from 'vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		outDir: 'build-node'
	}
};

export default config;
