import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-pdf'],
  },
  build: {
    commonjsOptions: {
      include: [/react-pdf/, /pdfjs-dist/],
    },
  },
  server: {
    fs: {
      strict: false,
    },
    port: 3000,
    open: true
  }
}) 