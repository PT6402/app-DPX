/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      assets: path.resolve("src/assets/"),
      components: path.resolve("src/components/"),
      context: path.resolve("src/context/"),
      db: path.resolve("src/db/"),
      helpers: path.resolve("src/helpers/"),
      hooks: path.resolve("src/hooks/"),
      data: path.resolve("src/data/"),
      routes: path.resolve("src/routes/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/variables.scss";`,
      },
    },
  },
});
