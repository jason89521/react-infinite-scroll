import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'InfiniteScroll',
      fileName: type => `main.${type}.js`,
    },
  },
  plugins: [react()],
});
