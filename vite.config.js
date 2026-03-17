import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        servicios: resolve(__dirname, 'servicios.html'),
      },
    },
  },
});
