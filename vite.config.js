import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Remove the loader option as it's not needed for this use case
    // Ensure .js files are not treated as JSX unless explicitly needed
    jsxInject: false,
  },
  server: {
    hmr: {
      overlay: true, // Keep the overlay enabled for error debugging
    },
  },
});