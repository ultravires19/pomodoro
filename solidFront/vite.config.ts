import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  server: {
    fs: {
      allow: ['..'],
    },
  },
  plugins: [solid()],
})
