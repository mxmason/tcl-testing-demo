import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [react()],
		server: {
			host: true,
			open: true,
		},
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './setup-vitest.js',
			watch: false,
		},
	};
});
