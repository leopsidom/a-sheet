import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "src/index-pkg.ts"),
      name: "ASheet",
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});
