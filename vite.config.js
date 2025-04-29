import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const API_URL = `${env.VITE_APP_BASE_NAME}`;
  const PORT = 3000;

  return {
    base: '/', // ✔ Use '/' for Vercel deployment (not './')
    server: {
      open: true,
      port: PORT,
      host: true
    },
    build: {
      outDir: 'dist', // ✔ Make sure build goes to /dist (Vercel default)
      chunkSizeWarningLimit: 1600
    },
    preview: {
      open: true,
      host: true
    },
    define: {
      global: 'window'
    },
    resolve: {
      alias: {
        '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs'
      }
    },
    plugins: [react(), jsconfigPaths()]
  };
});
