import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: '25.44.183.18',
  //   port: 5173
  // }, 
  plugins: [react()],
})
