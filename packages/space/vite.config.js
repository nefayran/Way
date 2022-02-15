// vite.config.ts
import vue from "@vitejs/plugin-vue";

const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  plugins: [vue()],
  define: { "process.env": {} },
  base: "./", // Base address.
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // for @
    },
  },
  server: {
    port: 4000, // Default port.
    open: true,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.ts"),
      name: "WayComponents",
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        sourceMap: true,
        format: "iife",
        name: "way.components",
        inlineDynamicImports: true,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "styles.css";
          return assetInfo.name;
        },
      },
    },
  },
});
