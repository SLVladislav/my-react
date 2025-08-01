import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    build: {
    sourcemap: true,
  },
  resolve: {
   alias: {
      '@': '/src',
      'pages': '/src/pages',
      "components": "./src/components"
    },
  }
})
