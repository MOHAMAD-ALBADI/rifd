import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps every asset path relative, so the build works on GitHub Pages
// sub-paths (user.github.io/repo/) and when opened from any static host.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        // three.js stays inside the lazily imported Canvas3D chunk (no eager preload)
        manualChunks: { motion: ['framer-motion'] },
      },
    },
  },
});
