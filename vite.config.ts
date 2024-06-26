import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sokoban/",
  test: {
    environment: "happy-dom",
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
