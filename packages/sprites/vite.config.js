/* eslint-disable */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import typescript from "@rollup/plugin-typescript";
import path from "path";

module.exports = defineConfig({
  plugins: [
    vue(),
    jsx(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/sprites")],
      symbolId: "sprite-[dir]-[name]",
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "WaySprites",
      fileName: (format) => `sprites.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        format: "iife",
        name: "way.sprites",
        inlineDynamicImports: true,
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        typescript({
          target: "es2020",
          rootDir: path.resolve(__dirname, "./src"),
          declaration: true,
          declarationDir: path.resolve(__dirname, "./dist"),
          exclude: [
            path.resolve(__dirname, "../node_modules/**"), 
            "**/__tests__/**"
          ],
          allowSyntheticDefaultImports: true,
          outDir: path.resolve(__dirname, "./dist/types"),
        }),
      ],
    },
  },
});
