import { resolve } from 'node:path'
import generouted from '@generouted/react-router/plugin'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generouted(),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: './auto-imports.d.ts',
      dirs: ['src/components'],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "./src/styles/main.scss";
          `,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
