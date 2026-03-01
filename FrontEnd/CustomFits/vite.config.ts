import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const isHttps =
		env.HTTPS === 'true' &&
		!!env.SSL_KEY &&
		!!env.SSL_CERT;

	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@styles': path.resolve(__dirname, 'src/styles')
			}
		},
		server: isHttps ? {
			https: {
				key: fs.readFileSync(env.SSL_KEY),
				cert: fs.readFileSync(env.SSL_CERT),
			},
			port: 5173
		} : {
			port: 5173
		}
	};
});
