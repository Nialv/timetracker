import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 8080, // you can replace this port with any port
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@config": "/src/config",
      "@helpers": "/src/helpers",
      "@hooks": "/src/hooks",
      "@interfaces": "/src/interfaces",
      "@reducers": "/src/reducers",
      "@routes": "/src/routes",
      "@store": "/src/store",
      "@views": "/src/views",
    },
  },
})
