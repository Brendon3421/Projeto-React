import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/Projeto-React', // Certifique-se de que a base esteja configurada corretamente
});
