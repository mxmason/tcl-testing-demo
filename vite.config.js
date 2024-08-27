import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [react()],
		test: {
			css: true,
			globals: true,
			environment: 'jsdom',
			setupFiles: './setup-vitest.js',
			watch: false,
		},
	};
});
