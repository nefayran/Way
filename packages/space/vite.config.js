// vite.config.ts
import vue from "@vitejs/plugin-vue";
import typescript from "@rollup/plugin-typescript";

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
      plugins: [
        typescript({
          target: "esnext",
          rootDir: path.resolve(__dirname, "./src/components"),
          declaration: true,
          declarationDir: path.resolve(__dirname, "./dist/types"),
          exclude: [
            path.resolve(__dirname, "../node_modules/**"),
            "**/__tests__/**",
          ],
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});
