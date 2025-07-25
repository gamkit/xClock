import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/shared/ui/styles/variables.scss" as *;`, // global import in scss
      },
    },
  },
  test: {
    globals: true, // Глобальный доступ к describe, test, expect
    environment: 'jsdom', // Браузерное окружение
    setupFiles: './src/setupTests.ts', // Файл с настройками
    css: true, // Обработка CSS
    coverage: {
      provider: 'v8', // Или 'istanbul'
      reporter: ['text', 'json', 'html'],
    },
  },
});
