import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    headers: {
      'Content-Security-Policy':
        "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' blob: data: http://localhost:5173 https://livingluxura.com https://ik.imagekit.io https://cdn-icons-png.flaticon.com https://www.lodhagroup.com; frame-src 'self' https://www.google.com https://www.youtube.com; connect-src 'self' ws://localhost:5173 http://localhost:5173 https://script.google.com https://script.googleusercontent.com;",
    },
  },
});