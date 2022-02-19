import { defineConfig, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const devConfig: UserConfigExport = {
  plugins: [react(), tsconfigPaths()],
};

const buildDemoConfig: UserConfigExport = {
  build: {
    outDir: 'demo',
  },
  plugins: [tsconfigPaths()],
};

const buildLibConfig: UserConfigExport = {
  build: {
    lib: {
      entry: 'src/lib/index.tsx',
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
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // run yarn dev
  if (command === 'serve') return devConfig;

  // run yarn build:demo
  if (mode === 'demo') return buildDemoConfig;

  // run yarn build
  return buildLibConfig;
});
