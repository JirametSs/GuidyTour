import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GuidyTour/', // 👈 ต้องตรงกับชื่อ repo ใน GitHub
});
