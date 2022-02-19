import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'demo') {
    return {
      build: {
        outDir: 'demo/dist',
      },
      plugins: [react()],
    };
  }

  return {
    build: {
      lib: {
        entry: 'src/index.tsx',
        name: 'InfiniteScroll',
        fileName: type => `main.${type}.js`,
      },
      rollupOptions: {
        external: ['react'],
        output: {
          globals: {
            react: 'React',
          },
        },
      },
    },
    plugins: [react()],
  };
});
