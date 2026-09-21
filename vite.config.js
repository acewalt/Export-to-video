import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Export-to-video/',
  build: {
    target: 'es2022',
    sourcemap: false
  }
});
