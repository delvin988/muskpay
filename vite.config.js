import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 6767,
    watch: {
      usePolling: true,
      interval: 100,
      ignored: []
    }
  }
})