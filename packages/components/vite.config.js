// vite.config.ts
const path = require("path");
const { defineConfig } = require("vite");
import vue from "@vitejs/plugin-vue";

module.exports = defineConfig({
  plugins: [
    vue(),
  ],
  define: { "process.env": {} },
  base: "./", // Base address.
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // for @
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "WayComponents",
      fileName: (format) => `way-components.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});