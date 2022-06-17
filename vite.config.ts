import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${resolve(
          __dirname,
          "src/assets/css/base.less"
        )}";`,
      },
    },
  },
  plugins: [vue()],
  publicDir: "assets",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
