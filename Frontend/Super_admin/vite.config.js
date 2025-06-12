import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// ✅ Fix for React Router 404 on page refresh
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true, // Allow React Router to handle the page refresh
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to the backend
    },
  },
});
