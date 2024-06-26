import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.REACT_APP_STAGE === 'development' ? '' : '/rescue-station/',
  define: {
    'import.meta.env.REACT_APP_STAGE': JSON.stringify(process.env.REACT_APP_STAGE),
  },
});
