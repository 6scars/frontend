import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build:{
    outDir:"../../public/mini-spotify",
    emptyOutDir: true
  },
  base: '/mini-spotify',
  server:{
    port:3001
  }
})
