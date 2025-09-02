import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel default output folder
  },
  server: {
    port: 5173, // optional local dev port
  },
});
