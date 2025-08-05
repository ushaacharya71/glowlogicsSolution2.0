import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    chunkSizeWarningLimit: 1024, // Suppress warning up to 1MB
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          radix: ['@radix-ui/react-dropdown-menu'],
          ui: ['@shadcn/ui'],
          chart: ['chart.js'],
          icons: ['lucide-react'],
        }
      }
    }
  },
})
