import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: { "process.env": {} },
  base: "./", // Base address.
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // for @
    },
  },
  server: {
    port: 4000, // Default port.
    open: true,
    cors: true,
  },
});
